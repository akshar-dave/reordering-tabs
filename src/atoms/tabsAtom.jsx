import { atom } from 'recoil';

const defaultTabs = ['Orders', 'Drafts', 'Documents', 'Account'];

const savedTabs = JSON.parse(localStorage.getItem('tabs'));

const tabsAtom = atom({
    key: 'tabs',
    default: savedTabs || defaultTabs,
});


const activeTabAtom = atom({
    key: 'activeTab',
    default: savedTabs ? savedTabs[0] : defaultTabs[0],
});

export { tabsAtom, activeTabAtom };