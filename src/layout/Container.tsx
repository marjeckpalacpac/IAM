import Content from "./Content"
import SideNav from "./SideNav"
const Container = () => {
return (
<div className="container" data-layout="container">
    <SideNav />
    <Content />
</div>
)
}

export default Container