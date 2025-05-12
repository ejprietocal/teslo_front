export interface MenuItem {
  name: string;
  link: string;
  icon: string;
  subMenus: SubMenu[];
}
interface SubMenu {
  name: string;
  link: string;
}
