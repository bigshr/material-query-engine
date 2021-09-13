/**
 * MaterialController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const axios = require("axios");

 const baseUrl = sails.config.api.url;
 const apiKey = sails.config.api.key;
 
 module.exports = {    
     
    async fetchMaterials(req, res) {
        try {     
            let {id} = req.allParams();    

            if (!id) {
                sails.log.error("Id param is not provided.");
                return res.badRequest({
                    err: "You must provide either the material id " +
                        "or the material formula in the ID request parameter."
                })
            }

            const endpoint = `${baseUrl}/materials/${id}/vasp`
            sails.log.debug(endpoint);

            const result = await axios.get(endpoint, {
                headers: {
                    'X-API-KEY': apiKey
                }
            });
            
            const data = await sails.helpers
                .materialTransform(result.data.response);

            return res.ok(data);

        } catch (err) {
            sails.log.error(err);
            return res.serverError({
                err: "Something bad happend in our servers. Please contact the support."
            });
        }
    },

    getMaterialDetails(req, res) {
        return res.view("pages/materialdetails");
    }

 
 };
 