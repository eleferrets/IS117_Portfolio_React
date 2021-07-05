import React from "react";

export default function Picture({alt, className, src, caption}) {
	return (
		<div>
			<img alt={alt} className={className} src={src}/>
			<figcaption>{caption}</figcaption>
		</div>
	)
}