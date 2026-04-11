1. client side application and server side application can interact with each other over http protocol by making 
    http request and receiving http response.
2. TO make http req from client side application , one can use either fetch function or axus module 
3. The following are the http req types.
    -GET->to red all resources
    -POST->to  create a new resource
    -PUT->to update entire resource
    -DELETE->to delete a resource
    -PATCH->to update a resource partially
4. The POST,PUT AND PATCH req types can have body property which can hold json data.Wheread GET and DELETE req do not have body property and they can send data through URL

5. state management
    sharing state + keeping state sync across app
    ->if any component want to share the state to any component , it cannot send directly when the component is far . we can achieve this using : 
        Context API--->small apps
        Redux/Zustand--->large apps


# Context API
    -Create context object
    -add state to context object
    -set this context povider to a parent
    -consume context from component

# Issues with COntext:
    -Context with use-state-hook is a best and simple state management mechanism for small applications.But it creates unnecessary rerendering issues when multiple state is part of a context 
    -To overcome this unnecessary issue,create multiple contexts and make sure each context have a single state
    -When the application size is huze , then maintainance of multiple components will become an issue,for such large applications advanced state managemant tools like redox / Zustand can be used


# state management with zustand
    -install zustand
    -create a store and keep state and functiions in the store
