const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res){
        // Encontrar todos os usuários que têm email que termina com @gmail.com
        // Desses usuários eu quero buscar todos que moram na rua "Rua do Cruzeiro"
        // Desses usuários eu quero buscar as tecnologias que começam com React, Se não tiver tecnologia que começa com React, retorne vazio

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses',
                    where: { 
                        street : 'Rua do Cruzeiro'
                    } 
                }, // endereços

                { association: 'techs', 
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'React%'
                        }

                    } 
                }, // tecnologias
            ]
        })

        return res.json(users);
    }
}