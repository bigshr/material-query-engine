module.exports = {


    friendlyName: 'Material Transform',
  
  
    description: '',
  
  
    inputs: {
      rawMaterial: {
        type: 'ref',
        description: 'The raw material json structure pulled from external API',
        required: true
      }
    },
  
  
    exits: {
  
      success: {
        description: 'All done.',
      },
  
    },
  
  
    fn: async function (inputs) {
      return inputs.rawMaterial.map(material => ({                
        id: material.material_id,
        prettyFormula: material.pretty_formula,
        spacegroup: {
            symprec: material.spacegroup.symprec,
            source: material.spacegroup.source,
            symbol: material.spacegroup.symbol,
            number: material.spacegroup.number,
            pointGroup: material.spacegroup.point_group,
            crystalSystem: material.spacegroup.crystal_system,
            hall: material.spacegroup.hall,
        },
        tags: material.tags,
        density: material.density
      }));
    }
  
  };
  