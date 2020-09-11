import { FormBuilder } from '@angular/forms';


// every side-nav item must have this props in the 'navigation' array and a valid + unique 'url' ! Important
interface Menu {
  name: string;
  url: string;
  icon: string;
  id: number | string;
  type: string;
}


// in future if need to customize side-nav position
export const options = {
  bottom: 0,
  fixed: false,
  top: 0
};


export const navigtions: Menu[] = [
  {
    id: 1,
    name: 'Home',
    type: 'item',
    icon: '',
    url: '/'
  }, {
    id: 2,
    name: 'Form',
    type: 'item',
    icon: '',
    url: '/form'
  },
  {
    id: 3,
    name: 'Table',
    type: 'item',
    icon: '',
    url: '/table'
  }, {
    id: 4,
    name: 'Image',
    type: 'item',
    icon: '',
    url: '/image'
  },
  {
    id: 5,
    name: 'Material Table',
    type: 'item',
    icon: '',
    url: '/materialTable'
  },
  {
    id: 5,
    name: 'Master Detail',
    type: 'item',
    icon: '',
    url: '/masterDetail'
  }
];
