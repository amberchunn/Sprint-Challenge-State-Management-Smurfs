1. What problem does the context API help solve?

Helps to solve the issue of 'prop drilling' and allows for easier data sharing between components throughout the component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are types of actions that can happen in our app with pieces of associated data.

Reducers contain the logic that dictates how the store responds to the actions.

The store is the object that stores all the state of the app. It is known as a 'single source of truth' because all state is kept and updated in the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is localized to a single component and is not accessible to other parts of the app. Whereas Application state is more global and can be accessed throughout your component tree.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to run async processes inside our Action Creators. It changes Action Creators to be asynchronous API calls. It allows us to make these happen prior to the actions go into the reducers.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is very powerful in that we are able to use state without needing to worry about prop drilling. It allows our state to have one source and is very predictable.
