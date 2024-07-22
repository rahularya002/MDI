import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Services", id: "Services" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-lg w-2xl" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="/logo.png" alt="My Logo" className="h-8 w-auto" /> {/* Replace with your logo path */}
          <p className="font-bold text-inherit">MD INFOSYSTEM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 w-2xl" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              className={`text-inherit ${activeSection === item.id ? 'text-primary' : ''}`}
              onSetActive={handleSetActive}
              style={{
                cursor: 'pointer',
                color: activeSection === item.id ? 'var(--nextui-colors-primary)' : 'inherit',
              }}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} to="home" smooth duration={500} color="primary" variant="flat">
            Home
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              className={`w-full ${activeSection === item.id ? 'text-primary' : ''}`}
              onSetActive={handleSetActive}
              style={{
                cursor: 'pointer',
                color: activeSection === item.id ? 'var(--nextui-colors-primary)' : 'inherit',
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
