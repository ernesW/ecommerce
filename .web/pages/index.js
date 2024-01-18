/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Center, FormControl, Heading, HStack, Input, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import "gridjs/dist/theme/mermaid.css"
import { AddIcon, EditIcon, InfoOutlineIcon, SearchIcon } from "@chakra-ui/icons"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, refs, set_val } from "/utils/state"
import { Grid as DataTableGrid } from "gridjs-react"
import NextHead from "next/head"



export function Input_4438cd65a9969141f556fc1a522e63fc () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_1c9954b291a71e2f160ec6c756f42ed2 = useCallback((_e0) => addEvents([Event("state.state.set_search_input", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Input onChange={on_change_1c9954b291a71e2f160ec6c756f42ed2} placeholder={`Search by name`} sx={{"width": "20%"}} type={`text`}/>
  )
}

export function Button_de5449dad95f2f1bd529c52de35a0789 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_41749390dc9e6f4d9e41a285cc428860 = useCallback((_e) => addEvents([Event("state.state.dump_products", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_41749390dc9e6f4d9e41a285cc428860}>
  {`save products`}
</Button>
  )
}

export function Box_15bdfac18560124c94372c7324c7d2ac () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_88dd5765e40cca7c19d3abbc4e210819 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{"input_qty": getRefValue(refs['ref_input_qty']), "input_price": getRefValue(refs['ref_input_price']), "input_name": getRefValue(refs['ref_input_name'])}}

        addEvents([Event("state.state.add_product", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    


  return (
    <Box as={`form`} onSubmit={handleSubmit_88dd5765e40cca7c19d3abbc4e210819} sx={{"width": "100%"}}>
  <Box sx={{"padding": "15px", "border": "black solid 1px"}}>
  <VStack sx={{"align": "right"}}>
  <HStack sx={{"width": "100%"}}>
  <Spacer/>
  <Text>
  {`Name`}
</Text>
  <FormControl isRequired={true} sx={{"width": "50%"}}>
  <Input_91c5e9215a64ef9273eec736e8d727c7/>
</FormControl>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Spacer/>
  <Text>
  {`Quantity`}
</Text>
  <FormControl isRequired={true} sx={{"width": "50%"}}>
  <Input_c7df56d5c89503e83b6807e25816bf0b/>
</FormControl>
</HStack>
  <HStack sx={{"width": "100%"}}>
  <Spacer/>
  <Text>
  {`Unit Price`}
</Text>
  <FormControl isRequired={true} sx={{"width": "50%"}}>
  <Input_7aea8b6ed5cf6b04bf162f787022b793/>
</FormControl>
</HStack>
</VStack>
</Box>
  <HStack>
  <Spacer/>
  <Button type={`submit`}>
  {`Add Product`}
</Button>
</HStack>
</Box>
  )
}

export function Grid_7f2e0c5a12935df3d2f0554e42527bb9 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <DataTableGrid columns={["Name", "Quantity", "Price", "Created date"]} data={state__state.product_data} pagination={true} search={true} sort={true}/>
  )
}

export function Input_7aea8b6ed5cf6b04bf162f787022b793 () {
  const ref_input_price = useRef(null); refs['ref_input_price'] = ref_input_price;
  const state__state = useContext(StateContexts.state__state)


  return (
    <Input id={`input_price`} isInvalid={state__state.invalid_inputs["input_price"]} placeholder={`Product price (in cents)`} ref={ref_input_price} type={`text`}/>
  )
}

export function Input_91c5e9215a64ef9273eec736e8d727c7 () {
  const ref_input_name = useRef(null); refs['ref_input_name'] = ref_input_name;
  const state__state = useContext(StateContexts.state__state)


  return (
    <Input id={`input_name`} isInvalid={state__state.invalid_inputs["input_name"]} placeholder={`Product Name`} ref={ref_input_name} type={`text`}/>
  )
}

export function Input_c7df56d5c89503e83b6807e25816bf0b () {
  const ref_input_qty = useRef(null); refs['ref_input_qty'] = ref_input_qty;
  const state__state = useContext(StateContexts.state__state)


  return (
    <Input id={`input_qty`} isInvalid={state__state.invalid_inputs["input_qty"]} placeholder={`Product Quantity`} ref={ref_input_qty} type={`text`}/>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Center sx={{"height": "100vh"}}>
  <VStack sx={{"width": "60vw", "height": "70%"}}>
  <Heading>
  {`E-Commerce Inventory`}
</Heading>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <InfoOutlineIcon/>
  <Heading size={`md`}>
  {`Products`}
</Heading>
  <Spacer/>
  <SearchIcon/>
  <Input_4438cd65a9969141f556fc1a522e63fc/>
</HStack>
  <Grid_7f2e0c5a12935df3d2f0554e42527bb9/>
</VStack>
  <VStack>
  <HStack sx={{"width": "100%"}}>
  <EditIcon/>
  <Spacer/>
  <Button_de5449dad95f2f1bd529c52de35a0789/>
</HStack>
  <HStack/>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <HStack sx={{"width": "100%"}}>
  <AddIcon/>
  <Heading size={`md`}>
  {`Add a New Product`}
</Heading>
  <Spacer/>
</HStack>
  <Box_15bdfac18560124c94372c7324c7d2ac/>
</VStack>
  <Spacer/>
</VStack>
</Center>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
