## Text Image Component Card 

### Functionality of the Component

The Text Image Component takes in the content for the particular screen like some content text along with a image in svg.

### Props

- themeColor : Specify the theme color (if you are using any theme color)
- data : An object of the content for the Component
    - questionId : specifies the particular question in the data
        - descriptionTexts : actual text content
        - imageComponent : Image in the component
        - next : next Pointer for next screen having the same style but different data
        - goto : Navigate to a new component
        



example:

```
quid1: {
    descriptionTexts: `<p>Hello There.</p><p>This is a sample Text Image Component</p>` ,
    imageComponent: sampleImageSvg,
    goto : NavigationScenes.COMPONENT_KEY2
  }


```

### Component Type

Relay Type Component


### Libraries Used

`react-native-htmlview` for parsing text provided as html content.
`react-native-router-flux` used in Next Button for Navigation to a different Component

### How to use it?

From a particular component, call the Text Image Component with the data/content and theme Color passed as props.