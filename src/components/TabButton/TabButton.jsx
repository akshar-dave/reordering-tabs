import { Reorder } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { activeTabAtom } from '../../atoms/tabsAtom';
import './TabButton.scss';

const TabButton = (props) => {
    const { tabName } = props;
    const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);

    const handleTabClick = () => {
        setActiveTab(current => tabName);
    };

    return (
        <button
            className={`tab-button ${tabName === activeTab ? 'active' : ''}`}
            onClick={handleTabClick}
        >
            {tabName}
        </button>
    );
}

export default TabButton;
