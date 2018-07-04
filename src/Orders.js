import React, {Component} from 'react'
import PropTypes from 'prop-types'
import orders from './data_1.json'
import {
  Grid,
  Image,
  Popup,
  Segment,
  Menu,
  Icon,
  Dimmer,
  Loader,
  Button,
  Search,
  Header,
  Input,
  Dropdown,
  Select
} from 'semantic-ui-react'
import OrdersDetails from './OrdersDetails'

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {allVisible: false};
  }

  toggleVisibility_true = () => {
    this.setState({allVisible: true})
  }
  toggleVisibility_false = () => {
    this.setState({allVisible: false})
  }

  // handleRef = (c) => {
  //   this.inputRef = c
  // }

  // search = (category) => {
  //   this.props.actions.loadAllOrders(1, category, this.inputRef.inputRef.value)
  // }


  render() {
    console.log('~~~~~~~~~~ found orders start ~~~~~~~~~')
    console.log(orders)
    console.log(orders.first)
    console.log('~~~~~~~~~~ found orders end ~~~~~~~~~~')

    // const options = [
    //   {key: 'order', text: 'Search Order', value: 'orderid'},
    //   {key: 'invoice', text: 'Search Invoice', value: 'invoice'},
    //   {key: 'orders', text: 'All Orders', value: 'orders'},
    // ]

    // const InputExampleActionDropdown = () => (
    //   <Input
    //     ref={this.handleRef}
    //     action={
    //       <Dropdown button floating options={options}
    //                 onChange={(e, value) => {
    //                   // if (this.inputRef.inputRef.value !== undefined && this.inputRef.inputRef.value != '') {
    //                   this.search(value.value)
    //                   // }
    //                   // else console.log(this.inputRef.inputRef.value)
    //                 }} defaultValue='orderid'/>}
    //     icon='search'
    //     iconPosition='left'
    //     placeholder='Search...'
    //     size='small'
    //     type='text'
    //     onChange={(e, value) => {
    //       if (value !== undefined && value != '') {
    //       }
    //       else {
    //         this.props.actions.loadAllOrders(1)
    //       }
    //     }}
    //   />
    // )
    return (
      <div>
        <Dimmer active={orders && orders.isFetching == true && true} inverted>
          <Loader active inverted content='Loading'/>
        </Dimmer>
        <div className='ui right aligned category search item'
             style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between'}}>
          <div>
            <Button size='small' style={{width: '10rem'}} content={'Expand all'} onClick={this.toggleVisibility_true}/>
            <Button size='small' style={{width: '10rem'}} content={'Concentrate all'}
                    onClick={this.toggleVisibility_false}/>
          </div>

          {/*<div><InputExampleActionDropdown/></div>*/}

          <div className='results'/>
        </div>

        {(orders.data !== undefined && !isEmpty(orders.data)) ?
          orders.data.map((row, index) => {
            return (
              <OrdersDetails
                row={row}
                page={orders.page}
                key={index}
                // findOrder={this.props.actions.findOrder}
                // found_order={found_order}
                allVisible={this.state.allVisible}
              />
            )
          })
          :
          ''
        }

        {/*Pagination*/}
        {/*<Menu floated='right' pagination>*/}
          {/*<Menu.Item>*/}
            {/*page &nbsp;&nbsp;&nbsp;*/}
            {/*{page} &nbsp;&nbsp;&nbsp;*/}
            {/*items &nbsp;&nbsp;&nbsp;*/}
            {/*{Math.min((offset), total) + '-' + Math.min((offset + limit - 1), total) + ' ' + 'of' + ' ' + total}*/}
          {/*</Menu.Item>*/}

          {/*<Menu.Item as='a'*/}
                     {/*icon*/}
                     {/*disabled={offset === 1}*/}
                     {/*onClick={() => {*/}
                       {/*let firstPage = this.props.orders.data.first.split('/').pop();*/}
                       {/*if (typeof firstPage === 'string') {*/}
                         {/*firstPage = 1;*/}
                       {/*}*/}
                       {/*this.props.dispatch(change('orders', 'orders', ''))*/}
                       {/*this.props.actions.loadAllOrders(firstPage);*/}
                       {/*// this.allOrdersDetailsVisibleReset()*/}
                     {/*}}*/}
          {/*>*/}
            {/*<Icon name='angle double left'/>*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item as='a'*/}
                     {/*icon*/}
                     {/*disabled={offset === 1}*/}
                     {/*onClick={() => {*/}
                       {/*let prevPage = this.props.orders.data.prev.split('/').pop();*/}
                       {/*if (typeof prevPage === 'string') {*/}
                         {/*prevPage = this.props.orders.data.page - 1;*/}
                       {/*}*/}
                       {/*this.props.actions.loadAllOrders(parseInt(prevPage));*/}
                       {/*// this.props.dispatch(change('orders', 'orders', ''))*/}
                       {/*// this.allOrdersDetailsVisibleReset()*/}
                     {/*}}*/}
          {/*>*/}
            {/*<Icon name='angle left'/>*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item as='a' icon*/}
                     {/*disabled={offset + limit >= total}*/}
                     {/*onClick={() => {*/}
                       {/*let nextPage = this.props.orders.data.next.split('/').pop();*/}
                       {/*this.props.actions.loadAllOrders(parseInt(nextPage));*/}
                       {/*// this.props.dispatch(change('orders', 'selected_row', ''))*/}
                       {/*// this.allOrdersDetailsVisibleReset()*/}
                     {/*}}*/}
          {/*>*/}
            {/*<Icon name='angle right'/>*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item as='a'*/}
                     {/*icon*/}
                     {/*disabled={offset + limit >= total}*/}
                     {/*onClick={() => {*/}
                       {/*let lastPage = this.props.orders.data.last.split('/').pop();*/}
                       {/*this.props.actions.loadAllOrders(parseInt(lastPage));*/}
                       {/*// this.props.dispatch(change('orders', 'selected_row', ''))*/}
                       {/*// this.allOrdersDetailsVisibleReset()*/}
                     {/*}}>*/}
            {/*<Icon name='angle double right'/>*/}
          {/*</Menu.Item>*/}
        {/*</Menu>*/}

      </div>

    )
  }
}

Orders.propTypes = {
  orders: PropTypes.object.isRequired,
};


export default Orders;
