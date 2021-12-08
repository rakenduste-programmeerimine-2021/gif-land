import AddPostForm from '../components/AddPostForm';
import LogInForm from '../components/LogInForm';
import RegisterForm from '../components/RegisterForm';
import Navbar from "../components/Navbar"

test('Kontrollib kas AddPostForm tekib', () => {
    const component = <AddPostForm shouldRender />
    expect(component).toBeDefined()
})
test('Kontrollib kas LogInForm tekib', () => {
    const component = <LogInForm shouldRender />
    expect(component).toBeDefined()
})
test('Kontrollib kas RegisterForm tekib', () => {
    const component = <RegisterForm shouldRender />
    expect(component).toBeDefined()
})
test('Kontrollib kas Navbar tekib', () => {
    const component = <Navbar shouldRender />
    expect(component).toBeDefined()
})