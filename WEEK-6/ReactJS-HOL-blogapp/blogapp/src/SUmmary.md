1. Need & Benefits of Component Lifecycle
Lifecycle methods allow React developers to hook into specific stages of a component’s existence: mounting, updating, and unmounting.

Benefits:

Load data when the component appears (e.g., via componentDidMount)

Catch errors gracefully (componentDidCatch)

Optimize performance

Control side effects (like API calls)

2. Lifecycle Hook Methods
Important ones:

constructor(): Initialize state/props

render(): Renders JSX

componentDidMount(): Invoked after the component is inserted into the DOM (great for fetching data)

componentDidCatch(): Handles errors during rendering or lifecycle

componentWillUnmount(): Cleanup

Sequence of Lifecycle Methods (Mounting Phase)
text
Copy
Edit
constructor() → render() → componentDidMount()