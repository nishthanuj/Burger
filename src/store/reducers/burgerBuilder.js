import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };

    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    };

    return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
    const updatedState = {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: true
    };

    return updateObject(state, updatedState);
};

const fetchIngredientsFailed = (state, action) => {
    const updatedState = {
        error: true
    };

    return updateObject(state, updatedState);
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_INGREDIENTS:
            return addIngredient(state, action);
        case actionsTypes.REMOVE_INGREDIENTS:
            return removeIngredient(state, action);
        case actionsTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionsTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        default:
            return state;

    }
};

export default reducer;