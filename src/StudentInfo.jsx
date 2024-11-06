// StudentInfo.jsx
import React, { useState } from "react";

/**
 * export default Item
 * import Item from './Item.js'
 *
 * export Item
 * import { Item } from './Item.js'
 *
 */

export function StudentInfo({lastName, firstName, sId, school, major}) {
  return (
    <div>
      <div>
        {lastName}, {firstName}
      </div>
      
    </div>
  );
}


/*

<ul>
        <li>
          <strong>ID:</strong> {sId}
        </li>
        <li>
          <strong>School:</strong> {school}
        </li>
        <li>
          <strong>Major:</strong> {major}
        </li>
      </ul>

*/
