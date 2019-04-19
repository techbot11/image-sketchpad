# image-sketchpad

![Screenshot](github/screenshot.png)

> Ps. No animals were harmed in taking this picture :P

## Description

This module allow to draw on pictures and export the result. (Uses `canvas` & `fabric.js`)

## Installation

`npm install --save ngx-image-drawing`

## Usage

Add the DrawOnImageComponent to the imports of the module which will be using the drawing module.

You can now use in a component like so
```html
<app-draw-on-image 
    [src]="imageUrl"
    (onSave)="onSave($event)"
    (onCancel)="close()">
</app-draw-on-image>
```

### Inputs

- `src: string` : Image url
- `saveText: string?` : Save button text (default value : 'Save' )
- `cancelText: string?` : Cancel button text (default value : 'Cancel')
- `loadingText: string?` : Image loading text (default value : 'Loading…')
- `errorText:  string?` : Image loading error text (default value : 'Error loading %@', where `%@` is replaced by the `src`)
- `outputMimeType: string?` : Mime Type of the output image, can be `image/png`, `image/jpeg` or `image/webp`
- `outputQuality: number?`: Number between 0 and 1 to determine the quality of the ouput image (if mimeType is jpeg or webp)
- `loadingTemplate: TemplateRef<any>?` : Image loading template
- `errorTemplate: TemplateRef<any>?` : Image loading error template


### Actions
- `onSave` - Action on save button click, use `$event` to get the new edited image
- `onCancel` - Action on cancel button click
