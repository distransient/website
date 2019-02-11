initSidebarItems({"enum":[["StateEvent","The enum holding the different types of event that can be received in a `State` in the handle_event method."],["Trans","Types of state transitions. T is the type of shared data between states. E is the type of events"]],"struct":[["ApplicationBuilder","`ApplicationBuilder` is an interface that allows for creation of an `Application` using a custom set of configuration. This is the normal way an `Application` object is created."],["CallbackQueue","A simple `Callback` queue. Using the `Sender` you can get using the `send_handle` method, you can add functions modifying `World` from an asynchronous context. Those callbacks will be ran sequentially without preserving ordering. # Example `rust,ignore // First, get a `Sender` handle. let handle = world.read_resource::<CallbackQueue>().send_handle(); // Then, create your asynchronous context (Future, Callback-based library, etc..) let future = ...; // Finally, use that handle inside of the asynchronous context to run code that can affect `World`. future.on_complete(move || { handle.send(|mut world| world.create_entity().build()).expect(\"Failed to add Callback to CallbackQueue.\"); });`"],["CoreApplication","`CoreApplication` is the application implementation for the game engine. This is fully generic over the state type and event type."],["GameData","Default game data."],["GameDataBuilder","Builder for default game data"],["StateData","State data encapsulates the data sent to all state functions from the application main loop."],["World","The `World` struct contains the component storages and other resources."]],"trait":[["Builder","A common trait for `EntityBuilder` and `LazyBuilder`, allowing either to be used. Entity is definitely alive, but the components may or may not exist before a call to `World::maintain`."],["Config","Trait implemented by the `config!` macro."],["DataInit","Initialise trait for game data"],["EmptyState","An empty `State` trait. It contains no `StateData` or custom `StateEvent`."],["SimpleState","A simple `State` trait. It contains `GameData` as its `StateData` and no custom `StateEvent`."],["State","A trait which defines game states that can be used by the state machine."],["SystemExt","Extension functionality associated systems."],["WithNamed","An easy way to name an `Entity` and give it a `Named` `Component`."]],"type":[["Application","An Application is the root object of the game engine. It binds the OS event loop, state machines, timers and other core components in a central place."],["Callback","The type of a callback. This is meant to be created from within asynchonous functions (`Future` for example). See `CallbackQueue` for more details."],["EmptyTrans","An empty `Trans`. Made to be used with `EmptyState`."],["SimpleTrans","A simple default `Trans`. Made to be used with `SimpleState`. By default it contains a `GameData` as its `StateData` and doesn't have a custom event type."],["TransEvent","Event queue to trigger state `Trans` from other places than a `State`'s methods. # Example: `rust, ignore world.write_resource::<EventChannel<TransEvent<MyGameData, StateEvent>>>().single_write(Box::new(|| Trans::Quit));`"]]});