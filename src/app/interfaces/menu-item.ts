export interface MenuItem {
  name: string;
  icon: string;
  subMenus: SubMenu[];
}
interface SubMenu {
  name: string;
  icon?: string;
  link?: string;
  subMenus?: SubMenu[];
}

