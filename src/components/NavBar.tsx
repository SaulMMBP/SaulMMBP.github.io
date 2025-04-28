import { useEffect, useRef } from "react";
import { NavLink } from "react-router";

const links = [
    {
        id: 0,
        to: "/",
        text: "Home",
    },
    {
        id: 1,
        to: "aboutme",
        text: "About Me",
    },
    {
        id: 2,
        to: "projects",
        text: "Projects",
    },
    {
        id: 3,
        to: "contact",
        text: "Contact",
    },
];

interface NavBarProps {
    isOpen: boolean;
    close(): void;
}

function NavBar(props: NavBarProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (props.isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [props.isOpen]);

    return (
        <dialog
            className="nav-container"
            ref={dialogRef}
            onCancel={props.close}
            onClick={(e) => {
                var element = e.target as HTMLElement;
                if (element.tagName !== "DIALOG") return;
                props.close();
            }}>
            <button className="nav-close-btn" onClick={props.close}>
                <i className="bi bi-x-square-fill"></i>
            </button>
            <nav>
                {links.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.to}
                        className={["nav-item", isActive].join(" ")}
                        onClick={props.close}>
                        {link.text}
                    </NavLink>
                ))}
            </nav>
        </dialog>
    );
}

function isActive() {
    return ({ isActive }: { isActive: boolean }) => (isActive ? "active" : "");
}

export default NavBar;
