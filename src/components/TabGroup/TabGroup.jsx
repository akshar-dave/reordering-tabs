import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tabsAtom, activeTabAtom } from '../../atoms/tabsAtom';
import TabButton from '../TabButton';
import { Reorder } from "framer-motion";
import './TabGroup.scss';

const TabGroup = (props) => {
    const { allowReordering = false, persistTabOrder = true } = props;
    const [tabs, setTabs] = useRecoilState(tabsAtom);
    const activeTab = useRecoilValue(activeTabAtom);

    useEffect(() => {
        if (!persistTabOrder) return;
        localStorage.setItem('tabs', JSON.stringify(tabs));
    }, [tabs]);

    return (
        <>
            <Reorder.Group
                as='div'
                axis="x"
                values={tabs}
                onReorder={setTabs}
                className='tab-group'
            >
                {tabs.map(tab => (
                    <Reorder.Item
                        key={tab}
                        value={tab}
                        dragListener={allowReordering}
                    >
                        <TabButton tabName={tab} />
                    </Reorder.Item>
                ))}
            </Reorder.Group >

            <br /><br />
            <h1>
                {activeTab}
            </h1>
        </>
    );
}

export default TabGroup;
