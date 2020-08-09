export function fillInputOnChange(form, name, event){
    const element = event.target
    form[name] = element.value
}