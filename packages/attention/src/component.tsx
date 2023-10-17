import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { classNames } from '@chbphone55/classnames'
import {
	opposites,
	rotation,
	useRecompute as recompute,
} from '@warp-ds/core/attention'
import { attention as ccAttention } from '@warp-ds/css/component-classes'
import { ArrowProps, AttentionProps } from './props'
import { i18n } from '@lingui/core'
// import { messages as nbMessages } from "./locales/nb/messages.mjs";
// import { messages as enMessages } from "./locales/en/messages.mjs";
// import { messages as fiMessages } from "./locales/fi/messages.mjs";
// import { activateI18n } from "../../i18n";

export function Attention(props: AttentionProps) {
	const {
		noArrow,
		isShowing,
		children,
		role,
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		placement,
		targetEl,
		className,
		...rest
	} = props

	// activateI18n(enMessages, nbMessages, fiMessages);

	const wrapperClasses = classNames(ccAttention.base, {
		[ccAttention.tooltip]: props.tooltip,
		[ccAttention.callout]: props.callout,
		[ccAttention.popover]: props.popover,
	})

	const [actualDirection, setActualDirection] = useState(placement)
	// Don't show attention element before its position is computed on first render
	const [isVisible, setIsVisible] = useState<Boolean | undefined>(false)

	const isMounted = useRef(true)
	const attentionRef = useRef<HTMLDivElement | null>(null)
	const arrowRef = useRef<HTMLDivElement | null>(null)

	const attentionState = {
		get isShowing() {
			return isShowing
		},
		get isCallout() {
			return rest.callout
		},
		get actualDirection() {
			return actualDirection
		},
		set actualDirection(v) {
			setActualDirection(v)
		},
		get directionName() {
			return placement
		},
		get arrowEl() {
			return arrowRef.current
		},
		get attentionEl() {
			return attentionRef.current
		},
		set attentionEl(v) {
			attentionRef.current = v
		},
		get targetEl() {
			return targetEl?.current
		},
		get noArrow() {
			return props.noArrow
		},
	}

	//TODO: See if we can move this function to the core-repo:
	const getTranslatedDirection = useMemo(() => {
		switch (opposites[actualDirection]) {
			case 'top':
				return i18n._({
					id: 'attention.direction.top',
					message: 'top',
					comment:
						'Default screenreader message for top direction in the attention component',
				})
			case 'right':
				return i18n._({
					id: 'attention.direction.right',
					message: 'right',
					comment:
						'Default screenreader message for right direction in the attention component',
				})
			case 'bottom':
				return i18n._({
					id: 'attention.direction.bottom',
					message: 'bottom',
					comment:
						'Default screenreader message for bottom direction in the attention component',
				})
			case 'left':
				return i18n._({
					id: 'attention.direction.left',
					message: 'left',
					comment:
						'Default screenreader message for left direction in the attention component',
				})
			default:
				return ''
		}
	}, [actualDirection])

	// TODO: See if we can move this function to the core repo:
  const activeAttentionProp = () =>
		props.tooltip
			? 'tooltip'
			: props.callout
			? 'callout'
			: props.popover
			? 'popover'
			: ''

	// TODO: See if we can move this function to the core repo:
	const getDefaultAriaLabel = () => {
		const pointingAtTranslation = i18n._({
			id: 'attention.ariaLabel.pointingAt',
			message: 'pointing to the',
			comment:
				'Default screenreader message for the pointingAt function in the attention component',
		})

		const pointingAt = !props.noArrow
			? `${pointingAtTranslation} ${getTranslatedDirection}`
			: ''

		return `${activeAttentionProp()} ${pointingAt}`
	}
	// Recompute on re-render
	useEffect(() => {
		recompute(attentionState)
	})

	useEffect(() => {
		if (isMounted.current) {
			isMounted.current = false

			// update attention's visibility after first render if showing by default or it's of type callout
			if (isShowing === true || props.callout) {
				setIsVisible(isShowing)
			}
		} else {
			setIsVisible(isShowing)
		}
	}, [isShowing, props.callout])

	return (
		<div
			aria-describedby={ariaDescribedby}
			role={props.role ?? (props.tooltip ? 'tooltip' : 'img')}
			aria-label={ariaLabel ?? getDefaultAriaLabel()}
			tabIndex={0}
			className={classNames(
				{
					[ccAttention.notCallout]: !props.callout,
					invisible: !isVisible && !props.callout,
					hidden: !isVisible && !props.tooltip,
				},
				className
			)}
			ref={attentionRef}
		>
			<div className={wrapperClasses}>
				{!props.noArrow && (
					<Arrow {...props} ref={arrowRef} direction={placement} />
				)}
				<div className={ccAttention.content}>{props.children}</div>
			</div>
		</div>
	)
}

const arrowDirectionClassname = (dir: string) => {
	const direction = dir.charAt(0).toUpperCase() + dir.slice(1)

	return `arrowDirection${direction}`
}

const Arrow = forwardRef<HTMLDivElement, ArrowProps>((props, ref) => {
	const { callout, direction, popover, tooltip } = props
	const arrowDirection = opposites[direction]

	const arrowClasses = classNames(
		ccAttention.arrowBase,
		ccAttention[arrowDirectionClassname(arrowDirection)],
		{
			[ccAttention.arrowTooltip]: tooltip,
			[ccAttention.arrowCallout]: callout,
			[ccAttention.arrowPopover]: popover,
		}
	)

	return (
		<div
			ref={ref}
			className={arrowClasses}
			style={{
				// TW doesn't let us specify exactly one corner, only whole sides
				borderTopLeftRadius: '4px',
				zIndex: 1,
				// border alignment is off by a fraction of a pixel, this fixes it
				[`margin${arrowDirectionClassname(arrowDirection)}`]: '-0.5px',
				transform: `rotate(${rotation[arrowDirection]}deg)`,
			}}
		/>
	)
})
