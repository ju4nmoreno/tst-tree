"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";

import { Category as ICategory } from "../../types"

type Props = {
	category: ICategory
}

function Category({ category: { id, name, sublevels}}: Props) {
	const [, , order] = useSelectedLayoutSegments()
	const [ isToggled, toggle ] = useState(false);

	return (
		<div className="ml-4">
			<Link href={`/${id}/0/${order}`}>{name}</Link>
			{sublevels?.length
				? <span className="cursor-pointer" onClick={() => toggle(!isToggled) } >[ {isToggled ? `cerrar` : `abrir`} ]</span>
				: null }
			{isToggled && sublevels?.map(sublevel => (
				<Category key={sublevel.id} category={sublevel} />
			)) }
		</div>
	
	)
}

export default Category
