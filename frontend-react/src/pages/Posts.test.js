import PictureLoader from "../components/PictureLoader"
import PictureLoaderAll from "../components/PictureLoaderAll"
import ProfilePictureLoader from "../components/ProfilePictureLoader"

//Fail mis sisaldab k6iki postitustega seotuid teste

test('Kontrollib kas PictureLoader tootab', () => {
    const component = <PictureLoader shouldRender />
    expect(component).toBeDefined()
})


test('Kontrollib kas PictureLoaderAll tootab', () => {
    const component = <PictureLoaderAll shouldRender />
    expect(component).toBeDefined()
})

test('Kontrollib kas ProfilePictureLoader tootab', () => {
    const component = <ProfilePictureLoader shouldRender />
    expect(component).toBeDefined()
})