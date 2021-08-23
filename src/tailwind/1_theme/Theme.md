

# Theme

&nbsp;



> Table of Contents
> 
>[🔖 Abbreviation](#abbreviation) 
>
>[🔖 Surface Color](#surface-color) 
>
>[🔖 Brand Color](#brand-color)
>
>[🔖 Specific Color](#specific-color)
>
>[🔖 Default Text Color](#default-text-color)
>
>[🔖 How to switch to the dark mode](#how-to-switch-to-the-dark-mode)
>
>[🔖 Example of almost all the classes](#example-of-almost-all-the-classes)
>


&nbsp;
*** 
&nbsp;

## Abbreviation

&nbsp;




- **s**  = surface color
- **b** = brand color
- **o** = overlay 
- **t1** = type 1
- **t2** = type 2
- **t3** = type 3
- **a1** = alpha channel's value no.1 (hsla)
- **a2** = alpha channel's value no.2 (hsla)
- **a3** = alpha channel's value no.3 (hsla)
- **a4** = alpha channel's value no.4 (hsla)
- **a5** = alpha channel's value no.5 (hsla)



 


&nbsp;
*** 
&nbsp;

## Surface Color

&nbsp;



> Table of Contents
> 
>[🔖 Theory](#theory-surface-color) 
>
>[🔖 Background Classes](#background-classes-surface-color) 
>
>[🔖 Use of shadow with background surface color](#use-of-shadow-with-background-surface-color) 
>
>[🔖 Text Classes](#text-classes-surface-color) 
>

&nbsp;





&nbsp;

### Theory (Surface Color)

Surface color can also be called the **primary color** or the **main color**.




&nbsp;

### Background Classes (Surface Color)

&nbsp;


**Type-1**

| Class Name | Explanation                                            |
|------------|--------------------------------------------------------|
| bg-s-t1a1  | Surface color (Type 1) with alpha channel's value no.1 |
| bg-s-t1a2  | Surface color (Type 1) with alpha channel's value no.2 |
| bg-s-t1a3  | Surface color (Type 1) with alpha channel's value no.3 |
| bg-s-t1a4  | Surface color (Type 1) with alpha channel's value no.4 |
| bg-s-t1a5  | Surface color (Type 1) with alpha channel's value no.5 |



**Type-2**

| Class Name | Explanation                                            |
|------------|--------------------------------------------------------|
| bg-s-t2a1  | Surface color (Type 2) with alpha channel's value no.1 |
| bg-s-t2a2  | Surface color (Type 2) with alpha channel's value no.2 |
| bg-s-t2a3  | Surface color (Type 2) with alpha channel's value no.3 |
| bg-s-t2a4  | Surface color (Type 2) with alpha channel's value no.4 |
| bg-s-t2a5  | Surface color (Type 2) with alpha channel's value no.5 |


&nbsp;

### Use of shadow with background surface color

&nbsp;


- The main surface color is the `bg-s-t1a1` or, `bg-s-t2a1`.
  
- Usually, we use other surface color classes like `bg-s-t1a2`, `bg-s-t1a3` `bg-s-t1a4`, etc on the main surface color. 
  
-  When we use the other surface color classes on the main surface color, we can use `shadow-sm` or `shadow` class with them. 
  
-  Shadow will help to stand out `bg-s-t1a2`, `bg-s-t1a3`, etc  over the main (`bg-s-t1a1`) surface color .
  

**Example**


```html

<div class=bg-s-t1a1>

    Main Surface color


    <div class=bg-s-t1a2 shadow-sm>

        Other Surface colors


    </div>

</div>

```


&nbsp;

### Text Classes (Surface Color)

&nbsp;


**Type-1**

| Class Name  | Explanation                                            |
|-------------|--------------------------------------------------------|
| text-s-t1a1 | Surface color (Type 1) with alpha channel's value no.1 |
| text-s-t1a2 | Surface color (Type 1) with alpha channel's value no.2 |
| text-s-t1a3 | Surface color (Type 1) with alpha channel's value no.3 |
| text-s-t1a4 | Surface color (Type 1) with alpha channel's value no.4 |
| text-s-t1a5 | Surface color (Type 1) with alpha channel's value no.5 |



**Type-2**

| Class Name  | Explanation                                            |
|-------------|--------------------------------------------------------|
| text-s-t2a1 | Surface color (Type 2) with alpha channel's value no.1 |
| text-s-t2a2 | Surface color (Type 2) with alpha channel's value no.2 |
| text-s-t2a3 | Surface color (Type 2) with alpha channel's value no.3 |
| text-s-t2a4 | Surface color (Type 2) with alpha channel's value no.4 |
| text-s-t2a5 | Surface color (Type 2) with alpha channel's value no.5 |
          

**Note:**  

Especially, surface text (font) color is needed when you are working with **SVG**. Other than that, surface font color doesn't have much use. 




&nbsp;
*** 
&nbsp;

## Brand Color

&nbsp;



> Table of Contents
> 
>[🔖 Theory](#theory-brand-color) 
>
>[🔖 Background Classes](#background-classes-brand-color) 
>
>[🔖 Text Classes](#text-classes-brand-color) 
>
>[🔖 Border Classes](#border-classes-brand-color) 
>

&nbsp;





&nbsp;

### Theory (Brand Color)

&nbsp;


Brand color can also be called the **Secondary color** or the **Accent color**.





&nbsp;

### Background Classes (Brand Color)

&nbsp;


**Type-1**

| Class Name | Explanation                                          |
|------------|------------------------------------------------------|
| bg-b-t1a1  | Brand color (Type 1) with alpha channel's value no.1 |
| bg-b-t1a2  | Brand color (Type 1) with alpha channel's value no.2 |
| bg-b-t1a3  | Brand color (Type 1) with alpha channel's value no.3 |



**Type-2**

| Class Name | Explanation                                          |
|------------|------------------------------------------------------|
| bg-b-t2a1  | Brand color (Type 2) with alpha channel's value no.1 |
| bg-b-t2a2  | Brand color (Type 2) with alpha channel's value no.2 |
| bg-b-t2a3  | Brand color (Type 2) with alpha channel's value no.3 |



&nbsp;

### Text Classes (Brand Color)

&nbsp;


**Type-1**

| Class Name  | Explanation                                          |
|-------------|------------------------------------------------------|
| text-b-t1a1 | Brand color (Type 1) with alpha channel's value no.1 |
| text-b-t1a2 | Brand color (Type 1) with alpha channel's value no.2 |
| text-b-t1a3 | Brand color (Type 1) with alpha channel's value no.3 |



**Type-2**

| Class Name  | Explanation                                          |
|-------------|------------------------------------------------------|
| text-b-t2a1 | Brand color (Type 2) with alpha channel's value no.1 |
| text-b-t2a2 | Brand color (Type 2) with alpha channel's value no.2 |
| text-b-t2a3 | Brand color (Type 2) with alpha channel's value no.3 |



&nbsp;

### Border Classes (Brand Color)

&nbsp;




**Type-1**

| Class Name    | Explanation                                          |
|---------------|------------------------------------------------------|
| border-b-t1a1 | Brand color (Type 1) with alpha channel's value no.1 |
| border-b-t1a2 | Brand color (Type 1) with alpha channel's value no.2 |
| border-b-t1a3 | Brand color (Type 1) with alpha channel's value no.3 |



**Type-2**

| Class Name    | Explanation                                          |
|---------------|------------------------------------------------------|
| border-b-t2a1 | Brand color (Type 2) with alpha channel's value no.1 |
| border-b-t2a2 | Brand color (Type 2) with alpha channel's value no.2 |
| border-b-t2a3 | Brand color (Type 2) with alpha channel's value no.3 |













                             


&nbsp;
*** 
&nbsp;

## Specific Color

&nbsp;



> Table of Contents
> 
>[🔖 Background Classes](#background-classes-specific-color) 
>
>[🔖 Text Classes](#text-classes-specific-color) 
>
>[🔖 Border Classes](#border-classes-specific-color) 
>

&nbsp;







&nbsp;

### Background Classes (Specific Color)

&nbsp;


**Red**

| Class Name | Explanation                                          |
|------------|------------------------------------------------------|
| bg-red-a1  | Specific color (Red) with alpha channel's value no.1 |
| bg-red-a2  | Specific color (Red) with alpha channel's value no.2 |
| bg-red-a3  | Specific color (Red) with alpha channel's value no.3 |



**Green**

| Class Name  | Explanation                                            |
|-------------|--------------------------------------------------------|
| bg-green-a1 | Specific color (Green) with alpha channel's value no.1 |
| bg-green-a2 | Specific color (Green) with alpha channel's value no.2 |
| bg-green-a3 | Specific color (Green) with alpha channel's value no.3 |


**Blue**

| Class Name | Explanation                                           |
|------------|-------------------------------------------------------|
| bg-blue-a1 | Specific color (Blue) with alpha channel's value no.1 |
| bg-blue-a2 | Specific color (Blue) with alpha channel's value no.2 |
| bg-blue-a3 | Specific color (Blue) with alpha channel's value no.3 |


**Yellow**

| Class Name   | Explanation                                             |
|--------------|---------------------------------------------------------|
| bg-yellow-a1 | Specific color (Yellow) with alpha channel's value no.1 |
| bg-yellow-a2 | Specific color (Yellow) with alpha channel's value no.2 |
| bg-yellow-a3 | Specific color (Yellow) with alpha channel's value no.3 |





&nbsp;

### Text Classes (Specific Color)

&nbsp;



**Red**

| Class Name  | Explanation                                          |
|-------------|------------------------------------------------------|
| text-red-a1 | Specific color (Red) with alpha channel's value no.1 |
| text-red-a2 | Specific color (Red) with alpha channel's value no.2 |
| text-red-a3 | Specific color (Red) with alpha channel's value no.3 |



**Green**

| Class Name    | Explanation                                            |
|---------------|--------------------------------------------------------|
| text-green-a1 | Specific color (Green) with alpha channel's value no.1 |
| text-green-a2 | Specific color (Green) with alpha channel's value no.2 |
| text-green-a3 | Specific color (Green) with alpha channel's value no.3 |


**Blue**

| Class Name   | Explanation                                           |
|--------------|-------------------------------------------------------|
| text-blue-a1 | Specific color (Blue) with alpha channel's value no.1 |
| text-blue-a2 | Specific color (Blue) with alpha channel's value no.2 |
| text-blue-a3 | Specific color (Blue) with alpha channel's value no.3 |


**Yellow**

| Class Name     | Explanation                                             |
|----------------|---------------------------------------------------------|
| text-yellow-a1 | Specific color (Yellow) with alpha channel's value no.1 |
| text-yellow-a2 | Specific color (Yellow) with alpha channel's value no.2 |
| text-yellow-a3 | Specific color (Yellow) with alpha channel's value no.3 |





&nbsp;

### Border Classes (Specific Color)

&nbsp;


**Red**

| Class Name    | Explanation                                          |
|---------------|------------------------------------------------------|
| border-red-a1 | Specific color (Red) with alpha channel's value no.1 |
| border-red-a2 | Specific color (Red) with alpha channel's value no.2 |
| border-red-a3 | Specific color (Red) with alpha channel's value no.3 |



**Green**

| Class Name      | Explanation                                            |
|-----------------|--------------------------------------------------------|
| border-green-a1 | Specific color (Green) with alpha channel's value no.1 |
| border-green-a2 | Specific color (Green) with alpha channel's value no.2 |
| border-green-a3 | Specific color (Green) with alpha channel's value no.3 |


**Blue**

| Class Name     | Explanation                                           |
|----------------|-------------------------------------------------------|
| border-blue-a1 | Specific color (Blue) with alpha channel's value no.1 |
| border-blue-a2 | Specific color (Blue) with alpha channel's value no.2 |
| border-blue-a3 | Specific color (Blue) with alpha channel's value no.3 |


**Yellow**

| Class Name       | Explanation                                             |
|------------------|---------------------------------------------------------|
| border-yellow-a1 | Specific color (Yellow) with alpha channel's value no.1 |
| border-yellow-a2 | Specific color (Yellow) with alpha channel's value no.2 |
| border-yellow-a3 | Specific color (Yellow) with alpha channel's value no.3 |






&nbsp;
*** 
&nbsp;

## Default Text Color

&nbsp;


> Table of Contents
> 
>[🔖 Layer-1 Classes](#layer-1-classes) 
>
>[🔖 Layer-2 Classes](#layer-2-classes) 
>
>[🔖 Layer-1 vs Layer 2 (When to use what)](#layer-1-vs-layer-2-when-to-use-what) 
>






&nbsp;

### Layer-1 Classes

&nbsp;


| Class Name | Explanation                                                   |
|------------|---------------------------------------------------------------|
| text-l1-a1 | Default text color (Layer 1)  with alpha channel's value no.1 |
| text-l1-a2 | Default text color (Layer 1)  with alpha channel's value no.1 |
| text-l1-a3 | Default text color (Layer 1)  with alpha channel's value no.1 |



&nbsp;

### Layer-2 Classes

&nbsp;



| Class Name | Explanation                                                   |
|------------|---------------------------------------------------------------|
| text-l2-a1 | Default text color (Layer 2)  with alpha channel's value no.1 |
| text-l2-a2 | Default text color (Layer 2)  with alpha channel's value no.1 |
| text-l2-a3 | Default text color (Layer 2)  with alpha channel's value no.1 |



&nbsp;

### Layer-1 vs Layer 2 (When to use what)

&nbsp;


**Definition**

- We can consider the `surface` background color as the layer-1 as no color is below that color. 

- But `brand`color & `specific` color background color should be considered as layer-2 as `surface` color stays under these colors. 


**When to use what**


- On the `surface` background color, use the layer-1's classes. Even if we use overlay color over `surface` background color, we need use the layer-1's classes on that.  

- On the `brand` color  `specific` color, use the layer-2's classes.



**Necessity of the layer-1 & layer-2 text color**

- When the `surface` background color is light, the layer-1 text color provides a dark color. On the contrary, when the 'surface` background color is dark, the layer-1 text color provides a light color. 

- When we use the `brand` or `specific` background color over the `surface` color, the background color of `brand` or `specific` is dark if the `surface` color is light and the background color of `brand` or `specific` is light if the `surface` color is dark. 
  
- So, if we use the layer-1 text color over the `brand` and `specific` background color, that will not be right. Because layer-1 text color depends on the `surface` color and  will be light on the light `brand` or `specific` color and dark on the dark `brand` or `specific` color.

- That's why, we need to use layer-2 text color over the `brand` or `specific` background color. It  will be dark on the light `brand` or `specific` color and light on the dark `brand` or `specific` color.





&nbsp;
*** 
&nbsp;

## How to switch to the Dark Mode

&nbsp;



Same classes will be used for both the light and the dark mode. Light mode is the default mode. To switch from light to the dark mode, we need to use the `.dark` class to the parent element. 


**Example - Light Mode:**

```html

<div>

    <div class="bg-c-s-t1_r">

        The most popular sport in Bangladesh is cricket. 
    
    </div>

</div>

```



**Example - Dark Mode:**

```html

<div class="dark">

    <div class="bg-c-s-t1_r">

        The most popular sport in Bangladesh is cricket. 
    
    </div>

</div>

```




&nbsp;
*** 
&nbsp;

## Example of almost all the classes

&nbsp;




**Copy paste the following code in your project**



```html


<div class="dark bg-s-t1 text-normal-a1">

  Surface color 

  <div class="bg-o-a1">Overlay-1</div>

  <div class="bg-o-a2">Overlay-2</div>

  <div class="bg-o-a3">Overlay-3</div>

  <div class="bg-o-a4">Overlay-4</div>

  <div class="bg-o-a5">Overlay-5</div>


  <div class="bg-b-t1a1">Brand 1</div>
  <div class="bg-b-t1a2">Brand 2</div>
  <div class="bg-b-t1a3">Brand 3</div>



  <div class="bg-red-a1">Red</div>

  <div class="bg-green-a1">Green</div>

  <div class="bg-blue-a1">Blue</div>

  <div class="bg-yellow-a1">Yellow</div>




<div class="text-l1-a1">Text Normal 1</div>

<div class="text-l1-a2">Text Normal 2</div>

<div class="text-l1-a3">Text Normal 3</div>


<div class="text-l2-a1">Text Opposite 1</div>

<div class="text-l2-a2">Text Opposite 2</div>

<div class="text-l2-a3">Text Opposite 3</div>



<div class="text-b-t1a1">Text Brand 1</div>

<div class="text-b-t1a2">Text Brand 2</div>

<div class="text-b-t1a3">Text Brand 3</div>


<div class="text-red-a1">Text Red</div>

<div class="text-green-a1">Text Green</div>

<div class="text-blue-a1">Text Blue</div>

<div class="text-yellow-a1">Text Yellow</div>


<div class="text-o-a1">Text Overlay 1</div>

<div class="text-o-a2">Text Overlay 2</div>

<div class="text-o-a3">Text Overlay 3</div>

<div class="text-o-a4">Text Overlay 4</div>

<div class="text-o-a5">Text Overlay 5</div>


</div>


```











