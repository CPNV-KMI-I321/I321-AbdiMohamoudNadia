import * as Pizza from '../entities/Pizza.js';
import {fail, validateId, validatePizza} from '../validation.js';

export function list(req, res) {
  res.json(Pizza.findAll());
}

export function get(req, res) {
  try{
    const id = Number(req.params.id);
    if(!validateId(id)) {
      return res.status(400).json({error:"ID invalide"});
    }
    const pizza = findById(id);
    if (pizza === undefined) {
      res.status(404).json({error:"Pizza non trouvée"});
    } else {
      res.json({pizza});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Une erreur interne est survenue."
    });
  }

}

export function create(req, res) {
  try {
    const {name, price} = req.body;
    if (validatePizza(body)) {
    } else {
      const newPizza = create(data);
      const message = `La pizza' ${newPizza.name} a bien été créé !`;
      res.status(201).json({
        message: message,
        pizza: newPizza
      });
    }
  } catch(error) {
    console.error(error);
    res.status(500).json({
      error:"Une erreur interne est survenue."
    });
  }

}

export function update(req, res) {
  try {
    const id = Number(req.params.id);
    const {name, price} = req.body;

    if (!validatePizza(body)){

    }

    const result = update(id, data);

    if (result === 0) {
      return res.status(404).json({error: "Pizza non trouvée"});

    } else {
      const pizzaUpdated = update(id, data);
      res.json({message: 'Piiza mise à jour', pizza: {pizzaUpdated}});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Une erreur interne est survenue."
    });

  }

}

export function remove(req, res) {
    try {

      const id = Number(req.params.id);
      const result =  Pizza.remove(id);

      if (result === 0) {
        return res.status(404).json({error: "Pizza non trouvé"});
      }
      res.json({message: "Pizza supprimée"});

    } catch(error) {
      console.error(error);
      res.status(500).json({
        error: "Une erreur interne est survenue."
      });
    }

}
