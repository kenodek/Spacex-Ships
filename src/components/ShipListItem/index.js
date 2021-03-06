import React, { memo } from "react";
import { useRouteMatch, Link, useParams } from "react-router-dom";

// Wihtout memo even if props does not change component is re-rendered.
const ShipListItem = memo(({ ship: { id, name }, isSelected }) => {
  return (
    <li
      className={`w-full h-auto cursor-pointer border-solid border-b border-black ${
        isSelected && "bg-blue-400"
      }`}
    >
      <Link to={`/ships/${id}`} className="block w-full h-full text-center p-4">
        <span className="text-2xl text-shadow" data-testid="shipName">
          {name}
        </span>
      </Link>
    </li>
  );
});

export default ShipListItem;
