import React, { useState } from 'react';

import { Clickable, DeadToggle } from '../../_helpers';
import { Card } from '../src';

const metadata = { title: 'Navigation/Card' };
export default metadata;

export const SingleCard = () => (
  <div>
    <h2>Single Card</h2>
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20">
      <div>
        <p>Standard card (with box-shadow):</p>
        <Card>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">DNB Eiendom</p>
            <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
            <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
            <p className="font-bold my-8">
              52 m
              <span
                style={{
                  fontSize: 10,
                  verticalAlign: 'super',
                  marginRight: 5,
                }}>
                2
              </span>
              Totalpris: 4 869 039 kr
            </p>
            <p className="text-14 text-gray-400 mb-0">
              Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
              <span className="text-gray-200">•</span> 2 soverom
            </p>
          </div>
        </Card>
      </div>
      <div>
        <p>Flat card (without box-shadow):</p>
        <Card flat>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">Flat Card</p>
            <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
            <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
            <p className="font-bold my-8">
              52 m
              <span
                style={{
                  fontSize: 10,
                  verticalAlign: 'super',
                  marginRight: 5,
                }}>
                2
              </span>
              Totalpris: 4 869 039 kr
            </p>
            <p className="text-14 text-gray-400 mb-0">
              Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
              <span className="text-gray-200">•</span> 2 soverom
            </p>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export const SelectableCard = () => {
  const [selected, setSelected] = useState(false);
  const [flatSelected, setFlatSelected] = useState(false);

  return (
    <div>
      <h2>Selectable Card</h2>
      <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20">
        <div>
          <p>Standard card (with box-shadow):</p>
          <Card selected={selected}>
            <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
            <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
            <div className="p-16">
              <p className="text-12 text-gray-300">DNB Eiendom</p>
              <p>
                <Clickable checkbox onClick={() => setSelected(!selected)}>
                  Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
                </Clickable>
              </p>
              <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
              <p className="font-bold my-8">
                52 m
                <span
                  style={{
                    fontSize: 10,
                    verticalAlign: 'super',
                    marginRight: 5,
                  }}>
                  2
                </span>
                Totalpris: 4 869 039 kr
              </p>
              <p className="text-14 text-gray-400 mb-0">
                Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
                <span className="text-gray-200">•</span> 2 soverom
              </p>
            </div>
          </Card>
        </div>
        <div>
          <p>Flat card (without box-shadow):</p>
          <Card flat selected={flatSelected}>
            <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
            <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
            <div className="p-16">
              <p className="text-12 text-gray-300">DNB Eiendom</p>
              <p>
                <Clickable checkbox onClick={() => setFlatSelected(!flatSelected)}>
                  Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
                </Clickable>
              </p>
              <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
              <p className="font-bold my-8">
                52 m
                <span
                  style={{
                    fontSize: 10,
                    verticalAlign: 'super',
                    marginRight: 5,
                  }}>
                  2
                </span>
                Totalpris: 4 869 039 kr
              </p>
              <p className="text-14 text-gray-400 mb-0">
                Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
                <span className="text-gray-200">•</span> 2 soverom
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const GridCards = () => (
  <div>
    <h2>Grid Cards</h2>
    <p>Standard cards (with box-shadow):</p>
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 mb-20">
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/402x402" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/404x404" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>
    <p className="mt-16">Flat cards (without box-shadow):</p>
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 mb-20">
      <Card flat>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card flat>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/402x402" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card flat>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/404x404" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>
  </div>
);

export const AnchorCard = () => (
  <div>
    <h2>Anchor Cards</h2>
    <div className="flex gap-16">
      <div>
        <p>Standard card (with box-shadow):</p>
        <Card>
          <div aria-owns="title_id"></div>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">DNB Eiendom</p>
            <h3 className="text-16 font-normal text-gray-800" id="title_id">
              <Clickable
                href="//finn.no"
                target="_blank"
                title="Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."
                className="text-current hover:no-underline focus:no-underline">
                Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
              </Clickable>
            </h3>
            <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
            <p className="font-bold my-8">
              52 m
              <span
                style={{
                  fontSize: 10,
                  verticalAlign: 'super',
                  marginRight: 5,
                }}>
                2
              </span>
              Totalpris: 4 869 039 kr
            </p>
            <p className="text-14 text-gray-400 mb-0">
              Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
              <span className="text-gray-200">•</span> 2 soverom
            </p>
          </div>
        </Card>
      </div>
      <div>
        <p>Flat card (without box-shadow):</p>
        <Card flat>
          <div aria-owns="title_id"></div>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">DNB Eiendom</p>
            <h3 className="text-16 font-normal text-gray-800" id="title_id">
              <Clickable
                href="//finn.no"
                target="_blank"
                title="Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."
                className="text-current hover:no-underline focus:no-underline">
                Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
              </Clickable>
            </h3>
            <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
            <p className="font-bold my-8">
              52 m
              <span
                style={{
                  fontSize: 10,
                  verticalAlign: 'super',
                  marginRight: 5,
                }}>
                2
              </span>
              Totalpris: 4 869 039 kr
            </p>
            <p className="text-14 text-gray-400 mb-0">
              Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
              <span className="text-gray-200">•</span> 2 soverom
            </p>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export const TogglesInCard = () => {
  const [checked, setChecked] = React.useState(false);
  const [flatChecked, setFlatChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  return (
    <div>
      <h2>Toggles in Card</h2>
      <div className="flex gap-32">
        <Card selected={checked} className="mt-32 w-max p-24 flex items-center">
          <DeadToggle checkbox checked={checked} className="-mt-8" />
          <Clickable checkbox labelClassName="ml-12" onClick={() => setChecked(!checked)}>
            Checkbox in a standard card
          </Clickable>
        </Card>
        <Card flat selected={flatChecked} className="mt-32 w-max p-24 flex items-center">
          <DeadToggle checkbox checked={flatChecked} className="-mt-8" />
          <Clickable checkbox labelClassName="ml-12" onClick={() => setFlatChecked(!flatChecked)}>
            Checkbox in a flat card
          </Clickable>
        </Card>
      </div>
      <div className="flex gap-32 mt-32">
        <Card selected={selected === 'a'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'a'} className="-mt-8" />
          <Clickable radio name="gfhjdkh4" labelClassName="ml-12" onClick={() => setSelected('a')}>
            Radio in a card - A
          </Clickable>
        </Card>
        <Card selected={selected === 'b'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'b'} className="-mt-8" />
          <Clickable radio name="gfhjdkh4" labelClassName="ml-12" onClick={() => setSelected('b')}>
            Radio in a card - B
          </Clickable>
        </Card>
        <Card flat selected={selected === 'c'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'c'} className="-mt-8" />
          <Clickable radio name="gfhjdkh4" labelClassName="ml-12" onClick={() => setSelected('c')}>
            Radio in a flat card - C
          </Clickable>
        </Card>
      </div>
    </div>
  );
};

export const DeadToggleInCard = () => {
  const [selected, setSelected] = React.useState('');
  const [flatSelected, setFlatSelected] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [flatChecked, setFlatChecked] = React.useState(false);

  return (
    <div>
      <h2>DeadToggles in Card</h2>
      <p>Standard cards (with box-shadow):</p>
      <div className="flex gap-16 mb-16">
        <Card className="py-12 px-16 w-max flex items-center" selected={selected === 'a'}>
          <DeadToggle radio checked={selected === 'a'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio name="purchase" onClick={() => setSelected('a')}>
                Purchase foo
              </Clickable>
            </h4>
            <p className="mb-0 text-14">520 kr/mnd</p>
          </div>
        </Card>
        <Card className="py-12 px-16 w-max flex items-center" selected={selected === 'b'}>
          <DeadToggle radio checked={selected === 'b'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio name="purchase" onClick={() => setSelected('b')}>
                Purchase bar
              </Clickable>
            </h4>
            <p className="mb-0 text-14">124 kr/mnd</p>
          </div>
        </Card>
      </div>
      <Card className="py-12 px-16 w-max flex items-center" selected={checked}>
        <DeadToggle checkbox checked={checked} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setChecked(!checked)}>
              Standard card checkbox
            </Clickable>
          </h4>
          <p className="mb-0 text-14">124 kr/mnd</p>
        </div>
      </Card>
      <p className="mt-32">Flat cards (without box-shadow):</p>
      <div className="flex gap-16 mb-16">
        <Card flat className="py-12 px-16 w-max flex items-center" selected={flatSelected === 'a'}>
          <DeadToggle name="flattoggle" radio checked={flatSelected === 'a'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio name="flatclickable" onClick={() => setFlatSelected('a')}>
                Purchase foo
              </Clickable>
            </h4>
            <p className="mb-0 text-14">520 kr/mnd</p>
          </div>
        </Card>
        <Card flat className="py-12 px-16 w-max flex items-center" selected={flatSelected === 'b'}>
          <DeadToggle name="flattoggle" radio checked={flatSelected === 'b'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio name="flatclickable" onClick={() => setFlatSelected('b')}>
                Purchase bar
              </Clickable>
            </h4>
            <p className="mb-0 text-14">124 kr/mnd</p>
          </div>
        </Card>
      </div>
      <Card flat className="py-12 px-16 w-max flex items-center" selected={flatChecked}>
        <DeadToggle checkbox checked={flatChecked} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setFlatChecked(!flatChecked)}>
              Flat card checkbox
            </Clickable>
          </h4>
          <p className="mb-0 text-14">124 kr/mnd</p>
        </div>
      </Card>
    </div>
  );
};

const ClickableCardWithDeadToggle = ({
  id,
  isSelected,
  setSelected,
  name,
}: {
  id: number;
  isSelected: boolean;
  setSelected: (value: React.SetStateAction<number | null>) => void;
  name: string;
}) => (
  <Card className="w-full flex items-center py-14 px-14 gap-14 my-12 font-bold" selected={isSelected}>
    <DeadToggle radio checked={isSelected} name={name} className="-mt-6" />
    <Clickable radio name={name} onClick={() => setSelected(id)} autofocus={true}>
      {id.toString()}
    </Clickable>
  </Card>
);

export const MultipleDeadToggleGroups = () => {
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);
  const [secondSelectedRadio, setSecondSelectedRadio] = useState<number | null>(null);
  return (
    <div>
      <fieldset key={1} className="mb-12" role="radiogroup">
        Radio group 1
        {[0, 1, 2].map((i) => (
          <ClickableCardWithDeadToggle
            key={i}
            id={i}
            isSelected={selectedRadio === i}
            setSelected={(x) => setSelectedRadio(x)}
            name="first-group"
          />
        ))}
      </fieldset>
      <fieldset key={2} role="radiogroup">
        Radio group 2
        {[3, 4, 5].map((i) => (
          <ClickableCardWithDeadToggle
            key={i}
            id={i}
            isSelected={secondSelectedRadio === i}
            setSelected={(x) => setSecondSelectedRadio(x)}
            name="second-group"
          />
        ))}
      </fieldset>
    </div>
  );
};
