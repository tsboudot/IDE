import React from 'react';
import CodeTab from './CodeTab';
import { useSelector } from 'react-redux';
import ButtonTab from './ButtonTab';
import Preview from './Preview';
import { useState } from 'react';

const Tabs = () => {

    const tabs = useSelector(state => state.tabs)
    const [tabIndex, setTabIndex] = useState(tabs[0].id)
    const previewData = useSelector(state => state.preview)

    return (
        <div className='flex grow'>
            <div className="grow flex flex-col w-[175px] shrink-0 border-r border-slate-200 text-slate-300">
                {tabs.map(tab =>
                    (<ButtonTab key={tab.id} id={tab.id} toggleTab={id => setTabIndex(id)} imgURL={tab.imgURL} buttonContent={tab.buttonContent} />))}
            </div>
            <div className="w-full grow relative">
                <CodeTab
                    id={tabIndex}
                    code={tabs.find(obj => obj.id === tabIndex).code}
                />

                {previewData.preview && <Preview />}
            </div>
        </div>
    );
};

export default Tabs;