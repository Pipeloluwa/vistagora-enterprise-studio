import { NavigateFunction } from "react-router-dom";


export const navigateHome= (navigate: NavigateFunction) => {
    navigate('/', {state: {relative: true}})
    
}

export const navigateAbout= (navigate: NavigateFunction) => {
    navigate('/about', {state: {relative: true}})
}

export const navigateTech= (navigate: NavigateFunction) => {
    navigate('/tech', {state: {relative: true}})
}

export const navigateMusic= (navigate: NavigateFunction) => {
    navigate('/music', {state: {relative: true}})
}

export const navigateMedia= (navigate: NavigateFunction) => {
    navigate('/media', {state: {relative: true}})
}

export const navigateContact= (navigate: NavigateFunction) => {
    navigate('/contact', {state: {relative: true}})
}