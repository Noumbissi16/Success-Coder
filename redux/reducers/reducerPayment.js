import { ADD_PAYMENT } from "../constants";
import PaymentModel from "../../data/paymentModel";
import moment from "moment";

const initialState = {
  payments: [],
};

const reducerPayment = (state = initialState, { type, orderInfos }) => {
  switch (type) {
    case ADD_PAYMENT:
      const newPayment = new PaymentModel(
        Date.now().toString(),
        orderInfos.courses,
        orderInfos.total,
        moment(new Date()).format("DD MM YYYY hh:mm")
      ).toJSON();
      return {
        ...state,
        payments: state.payments.concat(newPayment),
      };
    default:
      return state;
  }
};

export default reducerPayment;
