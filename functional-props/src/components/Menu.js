import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
        <>
            <ul>
            {this.props.menuItems.map((item, index) => {
            return <li key={index}>
                {/* add anonymous function ()=> {} to  stop click propogation */}
                {/* also be sure to pass in the argument in this method */}
                <button onClick={()=>{this.props.plateOrder(item)}}>
                    {item}
                 </button></li>
            })}
            </ul>
           
        </>
    )
  }
}

export default Menu