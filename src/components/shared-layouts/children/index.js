import React from "react";

export default function ChildrenComponent(props) {
    let {children} = props
    return children && (
        React.Children.map(children, (child, i) => {
                return child !== null && (
                    React.cloneElement(child, {
                        key: `key-${i}`,
                        'data-key':i,
                        className: child.props?.className ?? "",
                    })
                )
            }
        )
    )
}
