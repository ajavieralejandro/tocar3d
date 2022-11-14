import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header class="sticky top-0 z-50">
    <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src={require('../../images/favicon (3).ico')}
                  alt="Workflow"
                />
              </div>
              </div>
              </div>
              </div>
              {/*
             */}
            
      </nav>

   

      </header>  );
}

export default Nav;
