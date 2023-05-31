import React, { Component } from 'react';
import Menuitem from './Menuitem';

const reserveMenu = [
  {
    id: 1,
    menuname: '비빔밥',
    menutype: '한식',
  },
  {
    id: 2,
    menuname: '갈비찜',
    menutype: '한식',
  },
  {
    id: 3,
    menuname: '파스타',
    menutype: '양식',
  },
  {
    id: 4,
    menuname: '짬뽕',
    menutype: '중식',
  },
  {
    id: 5,
    menuname: '탕수육',
    menutype: '중식',
  },
  {
    id: 6,
    menuname: '부대찌개',
    menutype: '한식',
  },
  {
    id: 7,
    menuname: '돈까스',
    menutype: '양식',
  },
  {
    id: 8,
    menuname: '초밥',
    menutype: '일식',
  },
];

var timer;

class MenuitemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuitem: [],
    };
  }

  componentDidMount() {
    const { menuitem } = this.state;
    timer = setInterval(() => {
      if (menuitem.length < reserveMenu.length) {
        const index = menuitem.length;
        menuitem.push(reserveMenu[index]);
        this.setState({
          menuitem: menuitem,
        });
      } else {
        this.setState({
          menuitem: [],
        });

        //clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.menuitem.map((menuitem) => {
          return (
            <Menuitem
              key={menuitem.id}
              id={menuitem.id}
              menuname={menuitem.menuname}
              menutype={menuitem.menutype}
            />
          );
        })}
      </div>
    );
  }
}

export default MenuitemList;
