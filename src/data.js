/* eslint-disable no-unused-vars */
import Dreams1 from '../src/assets/Dreams1.jpg';
import Dreams2 from '../src/assets/Dreams2.jpg';
import Dreams3 from '../src/assets/Dreams3.jpg';
import Dreams4 from '../src/assets/Dreams4.jpg';

import Story1 from '../src/assets/True-Story1.jpg';
import Story2 from '../src/assets/True-Story2.jpg';
import Story3 from '../src/assets/True-Story3.jpg';
import Story4 from '../src/assets/True-Story4.jpg';

import Save1 from '../src/assets/Save-Yourself1.jpg';
import Save2 from '../src/assets/Save-Yourself2.jpg';
import Save3 from '../src/assets/Save-Yourself3.jpg';
import Save4 from '../src/assets/Save-Yourself4.jpg';

import Command1 from "../src/assets/GOD's-Comandment1.jpg";
import Command2 from "../src/assets/GOD's-Comandment2.jpg";
import Command3 from "../src/assets/GOD's-Comandment3.jpg";

export const Products = [
    {
        id: 1,
        img: Dreams1,
        images: [Dreams1, Dreams2, Dreams3, Dreams4],
        name: "Dreams Tee",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        delivery: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        price: 15000
    },
    {
        id: 2,
        img: Save1,
        images: [Save1, Save2, Save3, Save4],
        name: "Save Yourself Tee",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        delivery: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        price: 15000
    },
    {
        id: 3,
        img: Story1,
        images:[Story1 , Story2 , Story3, Story4],
        name: "True Story Tee",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        delivery: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        price: 15000
    },
    
    {
        id: 4,
        img: Command1,
        images:[Command1 , Command2 , Command3] ,
        name: "Commandment Tee",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        delivery: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit eum provident quis, tenetur ratione accusantium nisi atque nihil cumque soluta temporibus molestias officia rem, distinctio delectus repudiandae. Provident ut aliquam qui! Illum temporibus adipisci pariatur nemo dolores expedita ipsa perspiciatis unde porro consectetur ex eligendi sapiente, nobis, est quis.',
        price: 15000
    },
]

export const Story = [
    {
       
        name: "True Story Tee",
        price: 15000
    },
    {
        
        name: "True Story Tee",
        price: 15000
    },
    {
       
        name: "True Story Tee",
        price: 15000
    },
    {
        
        name: "True Story Tee",
        price: 15000
    },
]

export const Save = [
    {
        
        name: "Save Yourself Tee",
        price: 15000
    },
    {
        
        name: "Save Yourself Tee",
        price: 15000
    },
    {
        
        name: "Save Yourself Tee",
        price: 15000
    },
    {
       
        name: "Save Yourself Tee",
        price: 15000
    },
]

export const Command = [
    {
       
        name: "Dreams Tee",
        price: 15000
    },
    {
       
        name: "Dreams Tee",
        price: 15000
    },
    {
        
        name: "Dreams Tee",
        price: 15000
    },
]




export const Shop = [
    {
        id: 1,
        img: Dreams1,
        name: "Dreams Tee",
        price: 15000,
        stock: 'Sold Out',
        color: 'text-[#FF0000]'
    },
    {
        id: 2,
        img: Save1,
        name: "Save Yourself Tee",
        price: 15000,
        stock: 'Available',
        color: 'text-[#008000]'
    },
    {
        id: 3,
        img: Story1,
        name: "True Story Tee",
        price: 15000,
        stock: 'Available',
        color: 'text-[#008000]'
    },
    {
        id: 4,
        img: Command1,
        name: "Dreams Tee",
        price: 15000,
        stock: 'Sold Out',
        color: 'text-[#FF0000]'
    },
]

export const nigerianStates = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'FCT (Federal Capital Territory)',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
  ];
