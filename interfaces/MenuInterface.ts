export interface SubMenu {
    text: string;
    to: string;
}

export interface Menu {
    text: string;
    to?: string;
    icon: string;
    subMenu?: SubMenu[];
}