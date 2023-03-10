import React from "react";
import Select from "react-select";
import {useState} from 'react';
import BgColor from './BgColor.css';

function ColorChanger()
{
    var colors=[
        {
            value:'Lime',
            label:'lime'
        },
        {
            value:'Pink',
            label:'pink'
        },
        {
            value:'Lavender',
            label:'lavender'
        },
        {
            value:'Blue',
            label:'blue'
        },
        {
            value:'Red',
            label:'red'
        },
        {
            value:'Green',
            label:'green'
        },
        {
            value:'Grey',
            label:'grey'
        },
    ];
    var [dropdowncolor, colorvalue]=useState(colors.label)
    var handle= e=>
    {
         colorvalue(e.label);
    }
   return(
    <div className="setframe">
        <h2><b><center>Color Changer</center></b></h2>
       <div className="setdrop">
        <Select options={colors} onChange={handle}>
        </Select>
        </div>

        <style>
            {
                'table {background-color:'+dropdowncolor+';}'
            }
        </style>
        
    <table>
        <tbody>
            <td></td>
        </tbody>
    </table>
    </div>
   )
}
export default ColorChanger
