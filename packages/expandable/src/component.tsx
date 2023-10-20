import { classNames } from '@chbphone55/classnames'
import {
	box as ccBox,
	expandable as ccExpandable,
} from '@warp-ds/css/component-classes'
import React from 'react'
import { ExpandTransition, UnstyledHeading } from '../../_helpers'
import { ExpandableProps } from './props'
import { IconChevronDown16, IconChevronUp16 } from '@warp-ds/icons/react'

export function Expandable(props: ExpandableProps) {
	const {
		children,
		expanded = false,
		title = '',
		info = false,
		box = false,
		bleed = false,
		buttonClass = '',
		contentClass = '',
		className,
		onChange,
		chevron = true,
		animated,
		headingLevel,
		...rest
	} = props

	const [stateExpanded, setStateExpanded] = React.useState(expanded)
	const [showChevronUp, setShowChevronUp] = React.useState(false)

	React.useEffect(() => {
		setStateExpanded(expanded)
	}, [expanded])

	const toggleExpandable = (state) => {
		setStateExpanded(!state)
		if (onChange) onChange(!state)
		setTimeout(() => {
			setShowChevronUp(!state)
		}, 200)
	}

	return (
		<div
			{...rest}
			className={classNames(className, {
				[ccExpandable.expandable]: true,
				[ccExpandable.expandableBox]: box,
				[ccExpandable.expandableBleed]: bleed,
			})}
		>
			<UnstyledHeading level={headingLevel}>
				<button
					type='button'
					aria-expanded={stateExpanded}
					className={classNames({
						[buttonClass || '']: true,
						[ccExpandable.button]: true,
						[ccExpandable.buttonBox]: box,
					})}
					onClick={() => toggleExpandable(stateExpanded)}
				>
					<div className={ccExpandable.title}>
						{typeof title === 'string' ? (
							<span className={ccExpandable.titleType}>{title}</span>
						) : (
							title
						)}

						{/* Discuss which solution to go with:
            First option:  */}
						{chevron && (
							<div
								className={classNames({
									[ccExpandable.chevron]: true,
									[ccExpandable.chevronExpand]: stateExpanded && !showChevronUp,
									[ccExpandable.chevronCollapse]:
										!stateExpanded && showChevronUp,
									[ccExpandable.chevronBox]: box,
									[ccExpandable.chevronNonBox]: !box,
								})}
							>
								{!showChevronUp ? <IconChevronDown16 /> : <IconChevronUp16 />}
							</div>
						)}
            {/* Pros:
                We keep the solution in the same div as before. No repetition.

                Cons:
                The transition isn’t as smooth. 
                The animation is still there but it animates and then jumps for a split-section.  */}

						{/* Second option:  */}
						{/* {chevron && (
              <div
                className={classNames({
                  [ccExpandable.chevron]: true,
                  [ccExpandable.chevronExpand]: stateExpanded && !showChevronUp,
                  [ccExpandable.chevronCollapse]: !stateExpanded && showChevronUp,
                  [ccExpandable.chevronBox]: box,
                  [ccExpandable.chevronNonBox]: !box,
                })}
              >
                {!showChevronUp && (
                  <IconChevronDown16 />
                )}
              </div>
            )}
            {chevron && (
              <div
                className={classNames({
                  [ccExpandable.chevron]: true,
                  [ccExpandable.chevronBox]: box,
                  [ccExpandable.chevronCollapse]: !stateExpanded && showChevronUp,
                  [ccExpandable.chevronNonBox]: !box,
                })}
              >
                {showChevronUp && (
                  <IconChevronUp16 />
                )}
              </div>
            )} */}

            {/* Pros:
                Gives a smooth transition between the icons
                Cons: 
                A lot of repetition
            */}
					</div>
				</button>
			</UnstyledHeading>
			<ExpansionBehaviour animated={animated} stateExpanded={stateExpanded}>
				<div
					className={classNames({
						[contentClass || '']: true,
						[ccBox.box]: box,
						[ccExpandable.paddingTop]: box && title,
					})}
				>
					{children}
				</div>
			</ExpansionBehaviour>
		</div>
	)
}

function ExpansionBehaviour({ animated, stateExpanded, children }) {
	return animated ? (
		<ExpandTransition show={stateExpanded}>{children}</ExpandTransition>
	) : (
		<div
			className={classNames({
				[ccExpandable.expansion]: true,
				[ccExpandable.expansionNotExpanded]: !stateExpanded,
			})}
			aria-hidden={!stateExpanded ? true : undefined}
		>
			{children}
		</div>
	)
}
