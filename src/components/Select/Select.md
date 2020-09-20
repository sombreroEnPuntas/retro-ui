Select

```jsx
<Select name="select">
  <option label="<">{'back'}</option>
  <option label="X">{'stop'}</option>
  <option label=">">{'next'}</option>
</Select>
```

```jsx
<Select name="select">
  <option></option>
  <option>{'\\'}</option>
  <option>{'|'}</option>
  <option>
    {
      '//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'
    }
  </option>
</Select>
```

```jsx
<Select multiple name="select multiple">
  <option></option>
  <option>{'\\'}</option>
  <option>{'|'}</option>
  <option>
    {
      '//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'
    }
  </option>
</Select>
```

Select disabled

```jsx
<Select name="select disabled" status="disabled">
  <option></option>
  <option>{'\\'}</option>
  <option>{'|'}</option>
  <option>{'/'}</option>
</Select>
```

Select error

```jsx
<Select name="select error" status="error">
  <option></option>
  <option>{'\\'}</option>
  <option>{'|'}</option>
  <option>{'/'}</option>
</Select>
```

Select success

```jsx
<Select name="select success" status="success">
  <option></option>
  <option>{'\\'}</option>
  <option>{'|'}</option>
  <option>{'/'}</option>
</Select>
```
