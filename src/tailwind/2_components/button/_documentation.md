## Button



### HTML Element

- Use `<button>`, it's a inline element.  But if you want to have the button to be a block element,  use `block` and `w-full` class in   `<button>` element.  
- Alternatively, as button is a inline element. you can use  `<span>` or you can also use ` <div> ` where you would add `inline-block` class to make the button a inline element. On the other hand,  if you want your button to be a block element, you can use `<div>`.
- It's recommended to stick with `<button>` element as it will have better for accessibility and readability.



### Mandatory Classes



- You have to use `btn_r` class to every button.
-  Class `btn-sm_r` , `btn-md_r`  and `btn-lg_r` represent the size of the button. Choose one of them.
- `rounded` and `rounded-full` are straight Tailwind CSS class. Choose one of them on your button. 



### Color Classes (Mandatory)



> There are two types - a) colorful background b) transparent background, colorful broder and  seven colors to choose from (red,pink,green,blue, indigo,gray,yellow), total 14 classes, choose 1. 



- If you want a red background button with slightly less red at hover, choose `btn-red_r` or if you want a transparent background with red background  at hover and red on the border, choose `btn-border-red_r`
- If you want a pink background button with slightly less pink at hover, choose `btn-pink_r` or if you want a transparent background with pink background  at hover and pink on the border, choose `btn-border-pink_r`
- If you want a green background button with slightly less green at hover, choose `btn-green_r` or if you want a transparent background with green background  at hover and green on the border, choose `btn-border-green_r`
- If you want a blue background button with slightly less blue at hover, choose `btn-blue_r` or if you want a transparent background with blue background  at hover and blue on the border, choose `btn-border-blue_r`
- If you want a indigo background button with slightly less indigo at hover, choose `btn-indigo_r` or if you want a transparent background with indigo background  at hover and indigo on the border, choose `btn-border-indigo_r`
- If you want a gray background button with slightly less gray at hover, choose `btn-gray_r` or if you want a transparent background with gray background  at hover and gray on the border, choose `btn-border-gray_r`
- If you want a yellow background button with slightly less yellow at hover, choose `btn-yellow_r` or if you want a transparent background with yellow background  at hover and yellow on the border, choose `btn-border-yellow_r`




### Optional Classes



- At hover, if  you want your button to scale up, use `btn-scale-up_r` and if you want your button to scale down, use `btn_scale-down_r`




### Bug


If you want to center the button both horizontally and vertically (position: fixed) , don't use scaling classes (`btn-scale-up` , `btn-scale-down`). Otherwise the button will not be centered perfectly. 

