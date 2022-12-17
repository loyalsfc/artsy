import React from 'react'

function CatTitle({title}) {
  return (
        <div className='flex items-center justify-between text-black text-xl mb-4 font-medium'>
            <span>{title}</span>
            <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3522 18.6558C10.5778 18.8762 10.8837 19 11.2026 19C11.5216 19 11.8275 18.8762 12.053 18.6558L18.0073 12.8373L23.9615 18.6558C24.1883 18.87 24.4922 18.9884 24.8076 18.9858C25.123 18.9831 25.4247 18.8595 25.6477 18.6415C25.8707 18.4236 25.9972 18.1288 26 17.8206C26.0027 17.5124 25.8815 17.2154 25.6623 16.9937L18.8577 10.3442C18.6321 10.1238 18.3262 10 18.0073 10C17.6883 10 17.3824 10.1238 17.1568 10.3442L10.3522 16.9937C10.1267 17.2142 10 17.5131 10 17.8248C10 18.1365 10.1267 18.4354 10.3522 18.6558Z" fill="#2F2F2F"/>
            </svg>
        </div>
  )
}

function CheckBox({id, title}){
    return(
        <div className='text-lg text-grey-dark'>
            <input type="checkbox" name={id} id={id} className='mr-4'/>
            <label htmlFor={id}>{title}</label>
        </div>
    )
}
export { CatTitle, CheckBox}
