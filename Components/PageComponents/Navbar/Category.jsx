import React from 'react'

export default function NavCategory() {
    
    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
      
        let currentDropdown
        if (isDropdownButton) {
          currentDropdown = e.target.closest("[data-dropdown]")
          currentDropdown.classList.toggle("active")
        }
      
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
          if (dropdown === currentDropdown) return
          dropdown.classList.remove("active")
        })
      })

  return (
    <div>
    <div class="header">
    <div class="dropdown" data-dropdown>
      <button class="link" data-dropdown-button>Information</button>
      <div class="dropdown-menu information-grid">
        <div>
          <div class="dropdown-heading">Free Tutorials</div>
          <div class="dropdown-links">
            <a href="#" class="link">All</a>
            <a href="#" class="link">Latest</a>
            <a href="#" class="link">Popular</a>
          </div>
        </div>
        <div>
          <div class="dropdown-heading">Courses</div>
          <div class="dropdown-links">
            <a href="#" class="link">JavaScript</a>
            <a href="#" class="link">CSS</a>
            <a href="#" class="link">React</a>
          </div>
        </div>
        <div>
          <div class="dropdown-heading">Blog</div>
          <div class="dropdown-links">
            <a href="#" class="link">All</a>
            <a href="#" class="link">Latest</a>
            <a href="#" class="link">Popular</a>
          </div>
        </div>
        <div>
          <div class="dropdown-heading">Other</div>
          <div class="dropdown-links">
            <a href="#" class="link">Twitter</a>
            <a href="#" class="link">Newsletter</a>
            <a href="#" class="link">Discord</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <style>
        {`
            .link {
                background: none;
                border: none;
                text-decoration: none;
                color: #777;
                font-family: inherit;
                font-size: inherit;
                cursor: pointer;
                padding: 0;
              }
              
              .dropdown.active > .link,
              .link:hover {
                color: black;
              }
              
              .dropdown {
                position: relative;
              }
              
              .dropdown-menu {
                position: absolute;
                left: 0;
                top: calc(100% + .25rem);
                background-color: white;
                padding: .75rem;
                border-radius: .25rem;
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
                opacity: 0;
                pointer-events: none;
                transform: translateY(-10px);
                transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
              }
              
              .dropdown.active > .link + .dropdown-menu {
                opacity: 1;
                transform: translateY(0);
                pointer-events: auto;
              }
              
              .information-grid {
                display: grid;
                grid-template-columns: repeat(2, max-content);
                gap: 2rem;
              }
              
              .dropdown-links {
                display: flex;
                flex-direction: column;
                gap: .25rem;
              }
              
              .login-form > input {
                margin-bottom: .5rem;
              }
        `}
    </style>
    </div>
  )
}
