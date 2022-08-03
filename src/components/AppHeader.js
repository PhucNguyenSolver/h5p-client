import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

function AppHeader() {
    let location = useLocation()
    let activeLink = location.pathname
    // useEffect(() => {
    //     console.log(location)
    // }, [location])

    return (
        <div
            style={{
                display: "flex",
                background: "#1e213b",
                color: "white",
                padding: "1rem",
                alignItems: "center",
                justifyContent: "space-around",

                fontFamily: "Poppins,sans-serif",
                fontSize: 14,
            }}
        >
            <div flex={1}>
                <Link to="/">
                    <img src={require("../resources/h5p-logo.png")} alt="H5P" width={75} />
                </Link>
            </div>
            <div flex={1} className="nav">
                <Option activeLink={activeLink} name="PRICING" link="/pricing" />
                <Option activeLink={activeLink} name="INTEGRATIONS" link="/integrations" />
                <Option activeLink={activeLink} name="REQUEST A DEMO" link="/demos" />
            </div>
            <div flex={1}>
                <Button name="SIGN UP" color={"#5463d5"} />
                <Button name="LOGIN" color={"#1e213b"} />
            </div>
        </div>
    )
}

const Option = ({ name, link, activeLink }) => {
    const selected = link == activeLink
    return (
        <Link to={link} style={{ textDecoration: "none", color: "white" }}>
            <span
                style={{
                    flex: 1,
                    margin: "1rem",
                    fontWeight: 600,
                    borderBottom: selected && "2px solid white",
                }}
            >
                {name}
            </span>
        </Link>
    )
}

const Button = ({ name, color }) => (
    <button
        style={{
            fontWeight: 500,
            backgroundColor: color,
            color: "white",
            padding: ".5em 1.5em",
            borderRadius: 1000,
        }}
    >
        {name}
    </button>
)

export default AppHeader
