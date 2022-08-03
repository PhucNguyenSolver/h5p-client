import React from "react"

const AppFooter = () => {
    return (
        <div
            style={{
                padding: "3em",
                color: "white",
                backgroundColor: "#1e213b",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <span>
                H5P.com (SaaS) makes H5P available for more people worldwide and helps fund future improvements and the
                continued development of H5P. Copyright © 2022 Joubel. All rights reserved. H5P is a trademark of
                Joubel.
            </span>
            <div
                style={{
                    justifyContent: "space-between",
                    marginLeft: "3em",
                }}
            >
                <LinkIcon icon={"Tw"} />
                <LinkIcon icon={"FB"} />
            </div>
        </div>
    )
}

const LinkIcon = ({ icon }) => (
    <>
        <span
            style={{
                borderRadius: 1000,
                backgroundColor: "white",
                color: "black",
                padding: "1em",
                width: "4em",
                height: "4em",
            }}
        >
            {icon}
        </span>
    </>
)

export default AppFooter
