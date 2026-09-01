import { Component } from '@angular/core';
import menuData from 'src/app/shared/data/menu-data';
import { IMenuType } from 'src/app/shared/types/menu-d-t';

@Component({
    selector: 'app-nav-manus',
    templateUrl: './nav-manus.component.html',
    styleUrls: ['./nav-manus.component.scss'],
    standalone: false
})
export class NavManusComponent {
  public menu_data:IMenuType[] = menuData;

  bg: string = '/assets/img/bg/mega-menu-bg.jpg';

  getMenuClasses(item: IMenuType): string {
    const classes = [];
    if (item.hasDropdown && !item.megamenu) {
      classes.push('active', 'has-dropdown');
    } else if (item.megamenu) {
      classes.push('mega-menu', 'has-dropdown');
    }
    return classes.join(' ');
  }
}
