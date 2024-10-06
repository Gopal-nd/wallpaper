export interface Wallpaper {
    uri: string;
    name: string;
}

export interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}

export default function useWallpapers() {
    return [
        {
            "liked": false, "suggested": false, "library": false, "uri": 'https://ideogram.ai/assets/progressive-image/balanced/response/7JDI7ECjRJ-HT5kGLw0TpQ',
            "name": 'Lion'
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": 'https://ideogram.ai/assets/progressive-image/balanced/response/BP070Lh7Qmuz3Jpi1hlI0Q',
            "name": 'cover'
        }
        , {
            "liked": false, "suggested": false, "library": false, "uri": 'https://ideogram.ai/assets/progressive-image/balanced/response/zcChVaN1TxOOKziTCC9SUg',
            "name": 'superman'
        }, {
            "liked": false, "suggested": false, "library": false, "uri": 'https://cdn.leonardo.ai/users/75fab9fd-0859-4396-9a2e-ec228f9c8744/generations/7ff7e4dd-b0f7-4f2f-bb28-ccbd575d144a/variations/alchemyrefiner_alchemymagic_3_7ff7e4dd-b0f7-4f2f-bb28-ccbd575d144a_0.jpg?w=512',
            "name": 'sand'
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b5abb39b-d495-4863-8bda-037eb9143254/generations/70624043-7fc4-4312-9ddb-01b677612e01/variations/UniversalUpscaler_70624043-7fc4-4312-9ddb-01b677612e01.jpg?w=512",
            "name": 'Lovely'
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": 'https://cdn.leonardo.ai/users/1da1f7a9-5b20-44b4-8f96-56dcd4440f23/generations/cb315620-0d99-40ef-a56d-1a37154e647e/variations/Default_In_a_beautifully_crafted_cozy_night_scene_two_anime_ch_2_cb315620-0d99-40ef-a56d-1a37154e647e_0.jpg?w=512',
            "name": 'night'
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": 'https://cdn.leonardo.ai/users/2bc394ad-571e-4b5d-97cc-ebe259620f0e/generations/263acc72-b7ea-4820-9656-3ea9a63ee785/Leonardo_Anime_XL_a_small_coconut_tree_on_a_secluded_beach_loc_2.jpg?w=512',
            "name": 'beach'
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": 'https://cdn.leonardo.ai/users/5d1b124f-ec4a-4e3a-8b3e-c17c76f9079b/generations/6c670d60-5812-40a8-a384-2d8169df08dc/Leonardo_Anime_XL_Create_an_animated_logo_for_the_podcast_cha_1.jpg?w=512',
            "name": 'women'
        }, {
            "liked": false, "suggested": false, "library": false, "uri": 'https://ideogram.ai/assets/progressive-image/balanced/response/qV-E9HV7Tmyj3WXUkXcQ3A',
            "name": 'mareio'
        }, {
            "liked": false, "suggested": false, "library": false, "uri": 'https://ideogram.ai/assets/progressive-image/balanced/response/j581eXSBRS2pJw_su5th0g',
            "name": 'pirate'
        },
         {
            "liked": false, "suggested": false, "library": false, "uri": 'https://ideogram.ai/assets/image/lossless/response/_oxjYR_dSyODYeLNTeTmvg',
            "name": 'sunset'
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/e1c8e949-1db3-4f78-965a-8824ff90abb3/generations/901bb84e-0395-4b76-8e92-f8ee4e6f5db2/Leonardo_Phoenix_a_mesmerizing_and_vibrant_cinematic_photograp_1.jpg?w=512",
            "name": "A mesmer"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/a6e907fa-80e5-4339-bf01-07d243c780df/generations/5cfec359-618c-484a-8488-5c826ec1ebb5/Leonardo_Phoenix_a_highly_detailed_and_immersive_cinematic_pho_0.jpg?w=512",
            "name": "A highly"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/6a3e99e2-f02d-4f1c-a862-bdc58d811db4/generations/99fc9438-31e6-4529-be0f-98c4f63f2d4a/DreamShaper_v7_ultra_detailed_druid_goddess_with_a_crown_made_0.jpg?w=512",
            "name": "Ultra de"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/ce4f2a76-c698-48fc-b41e-4b031758f099/generations/f245c29f-f396-46b0-aa0f-2a38af158d93/variations/alchemyrefiner_alchemymagic_1_f245c29f-f396-46b0-aa0f-2a38af158d93_0.jpg?w=512",
            "name": "A mesmer"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/90f331b1-02fb-4169-8c18-81d83fb072d0/generations/2bb7244f-07f6-4b42-9edf-c6054eea1900/variations/alchemyrefiner_alchemymagic_0_2bb7244f-07f6-4b42-9edf-c6054eea1900_0.jpg?w=512",
            "name": "St"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b76aed98-d2d3-4637-aa58-e27bcf87bfcf/generations/c2a0c764-4210-4eec-ad7e-0ac2c80f57fd/Leonardo_Phoenix_Una_escena_dramtica_donde_se_ve_un_huracn_int_3.jpg?w=512",
            "name": "Una esce"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/3220d04f-c837-41da-94fe-0111e60694be/generations/d823acd1-98ae-4fbf-9c62-6b451ccc965c/variations/alchemyrefiner_alchemymagic_3_d823acd1-98ae-4fbf-9c62-6b451ccc965c_0.jpg?w=512",
            "name": "Amidst t"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1fb1142b-4a3a-4ce4-a6d2-392ccd30bfaf/generations/2e0f713a-7cb7-4c02-b2ee-439a50969655/Leonardo_Phoenix_A_vibrant_and_ominous_metalcore_band_tshirt_f_5.jpg?w=512",
            "name": "A vibran"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/c3dc8fcb-4b3d-4c3a-9baf-cdc801f4501b/generations/388d3686-ea81-452a-9b40-d9abdd7555b0/variations/alchemyrefiner_alchemymagic_0_388d3686-ea81-452a-9b40-d9abdd7555b0_0.jpg?w=512",
            "name": "Highly s"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/76301e1c-1dc5-4ad1-8aa2-24c98e14cea9/generations/186f07e6-134e-4e96-99c4-22178a2ba0ce/Leonardo_Phoenix_Stylized_digital_art_profile_picture_of_an_an_1.jpg?w=512",
            "name": "Stylized"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/cc60a64c-9d4c-458a-b60d-e4dde97ee6d4/generations/e47c1dad-bf43-4d80-b7a3-1f07db5bfbec/Leonardo_Vision_XL_A_beautiful_illusion_of_all_ideas_in_cosmos_3.jpg?w=512",
            "name": "A beauti"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/c2527128-0683-44b0-a81b-f5070059ba6e/generations/bda75abb-f098-4ee3-bdab-724edd8745c3/variations/Default_WHITE_TIGER_HEAD_ONI_STYLE_SVG_HEAD_ONLY_BLACK_BACKGRO_3_bda75abb-f098-4ee3-bdab-724edd8745c3_0.jpg?w=512",
            "name": "WHITE TI"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/91d32531-574a-46d1-9bfe-8e83abc7b947/generations/69db8043-18e7-4921-b592-9a13689c6fb3/variations/Default_A_closeup_photorealistic_image_of_a_woman_with_a_heart_0_69db8043-18e7-4921-b592-9a13689c6fb3_0.jpg?w=512",
            "name": "A close-"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/65d7e3ae-c300-4d81-a3a2-9b40698e852d/generations/b7e2700d-e297-49ad-a34e-acf5e1b6e04a/Leonardo_Kino_XL_Create_a_highly_detailed_mythical_depiction_o_5.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/7e7f36a4-6ae6-4f41-b105-873899463bea/generations/4cc27e24-9d89-4cb5-b971-90d0dedbdfa0/Leonardo_Phoenix_A_mesmerizing_vibrant_and_cinematic_photograp_2.jpg?w=512",
            "name": "A mesmer"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/a9e38747-f12b-46c8-97f6-571fd43d3c78/generations/9359cb7b-38d0-43a4-96b0-c8a0096d9882/Leonardo_Phoenix_A_majestic_lion_dressed_in_regal_attire_sits_0.jpg?w=512",
            "name": "A majest"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b0b13092-c31b-41ba-b79e-9721882f6869/generations/86659dff-5c60-4192-bf3a-6110d8b4ba8f/Leonardo_Anime_XL_Studio_Ghibli_style_a_cozy_indoor_scene_feat_0.jpg?w=512",
            "name": "Studio G"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/0cd478ad-6384-4168-af7b-bf5919d8e8df/generations/b56fb647-e89e-4a28-80ea-c5398ee05094/variations/alchemyrefiner_alchemymagic_0_b56fb647-e89e-4a28-80ea-c5398ee05094_0.jpg?w=512",
            "name": "A stealt"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/91099951-7ee5-4951-a23c-f8aee5ae4a26/generations/0b2f780c-a9ce-4685-98f1-56f70207e4b8/Leonardo_Phoenix_Digital_painting_of_a_quaint_multistory_house_1.jpg?w=512",
            "name": "Digital "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d1e6693e-5b73-4f76-9669-5e5a9f94b4f7/generations/823d4630-7ed6-4419-8ff4-ea033fb1bf5c/variations/alchemyrefiner_alchemymagic_3_823d4630-7ed6-4419-8ff4-ea033fb1bf5c_0.jpg?w=512",
            "name": "A dramat"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d9af2730-a4b2-483a-aab4-e2b52ecb35c9/generations/e2ba6053-a4da-49f7-a66d-4de320798fe0/variations/Default_This_foul_medium_creature_appears_more_or_less_humanoi_6_e2ba6053-a4da-49f7-a66d-4de320798fe0_0.jpg?w=512",
            "name": "This fou"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/70cadc7d-31b5-4dc5-b9c0-e433bbe9f21f/generations/1fac85e3-144a-4731-88a7-f773c3c299e8/Leonardo_Anime_XL_Beautiful_girlmasterpiece_highest_quality_ul_3.jpg?w=512",
            "name": "(Beautif"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/318ae018-631f-4a8e-9da4-f8922c857486/generations/3879beec-e264-4baf-acd6-d2fb46742630/variations/alchemyrefiner_alchemymagic_3_3879beec-e264-4baf-acd6-d2fb46742630_0.jpg?w=512",
            "name": "The beau"
        },
  
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/cef840dc-cd8a-4638-b54c-80fc37877c39/generations/08767285-aa88-4dea-9ae7-bcfdbeb5342a/Leonardo_Phoenix_Design_a_fantasy_RPG_summoning_card_that_feat_2.jpg?w=512",
            "name": "Design a"
        },
        {
            "liked": true, "suggested": false, "library": true, "uri": "https://cdn.leonardo.ai/users/235ac86d-4b59-4bad-bc54-ef1aa258c790/generations/e4959cca-bfe9-49b5-ab4a-20fea9074e9c/Christmas_Stickers_A_Cute_vintage_Christmas_sticker_with_a_sin_2.jpg?w=512",
            "name": "A Cute v"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/e4221af6-6e35-43b6-8659-fa81d7bf5aa9/generations/b464a612-d1a1-4d6d-bc54-cc45aeb01016/AlbedoBase_XL_Illustration_by_Luis_Royo_Black_background_A_bea_0.jpg?w=512",
            "name": "Illustra"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b8083275-cc92-4166-b44f-7c73799e22fb/generations/24d9e27a-3edd-4753-af4f-3a392e4459ed/Leonardo_Lightning_XL_Glitching_circuitry_dances_across_the_sl_3.jpg?w=512",
            "name": "Glitchin"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d4401e30-f2f4-4396-a5cd-9ab67ad55ecf/generations/8aed543e-cf0c-4600-907a-ceb147f39810/Leonardo_Phoenix_A_dramatic_cinematic_keyframe_depiction_of_a_0.jpg?w=512",
            "name": "A dramat"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/c6ade954-b63e-42d7-988c-5caee5bfbcbc/generations/75206b7d-de7c-4dbb-8e32-445c7dfab955/variations/alchemyrefiner_alchemymagic_0_75206b7d-de7c-4dbb-8e32-445c7dfab955_0.jpg?w=512",
            "name": "Steampun"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/f1041190-1ab2-4ddd-917a-5fc5503dfbdf/generations/69412564-c1e9-49cb-a9c9-94d7770de309/Leonardo_Anime_XL_Image_is_a_black_and_white_digital_illustrat_0.jpg?w=512",
            "name": "Image is"
        },

        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/14f246af-1fdc-4afc-b587-b1815efcd860/generations/cc08d5bc-da27-4528-aed4-76a37d115a5f/Leonardo_Phoenix_A_vibrant_eyecatching_poster_with_bold_graffi_1.jpg?w=512",
            "name": "A vibran"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/141d9e43-3390-49a9-8f09-9cd71f2591e5/generations/782b8530-ca86-4ce7-b394-792072ae4d59/Leonardo_Phoenix_A_highly_detailed_roughcolored_pencil_sketch_3.jpg?w=512",
            "name": "A highly"
        },
        {
            "liked": false, "suggested": true, "library": false, "uri": "https://cdn.leonardo.ai/users/b7072c38-c9b3-4af6-8fbb-79ebf192a32d/generations/aec50ec0-9b08-47b6-b9b0-1d9773d71ea6/Leonardo_Phoenix_a_dramatic_highcontrast_cinematic_photograph_1.jpg?w=512",
            "name": "A dramat"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/46940992-f993-4bcc-be32-fa2573c1596b/generations/f2c8be57-a0b4-49e6-b79f-cfde59b08d87/AlbedoBase_XL_Adult_Female_full_body_Masterpiece_animated_imag_1.jpg?w=512",
            "name": "Adult Fe"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1d47e702-fe10-490c-9b3c-5b3e4d40bd74/generations/1c26a083-03aa-4754-b33b-6e2d99af622e/variations/universal_upscale_0_1c26a083-03aa-4754-b33b-6e2d99af622e_0.jpg?w=512",
            "name": "A lone s"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/8751b844-ca09-48b7-bb22-0ab4a74e4422/generations/a63bfede-0009-45c5-89cc-b8404598c638/variations/Default_A_divine_light_shining_down_from_the_heavens_on_a_man_1_a63bfede-0009-45c5-89cc-b8404598c638_0.jpg?w=512",
            "name": "&quot;A "
        },
        {
            "liked": true, "suggested": false, "library": true, "uri": "https://cdn.leonardo.ai/users/d32e2432-bed0-4ace-9507-b81c97808a17/generations/670be7a2-9289-416b-900f-bd76839854d4/Leonardo_Phoenix_A_breathtaking_aerial_photography_shot_of_an_1.jpg?w=512",
            "name": "A breath"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d3a3c106-84ff-4a0e-935c-6fcacbc3c993/generations/6433d376-a4fe-4f4e-a759-e3ffb0cb0214/variations/alchemyrefiner_alchemymagic_3_6433d376-a4fe-4f4e-a759-e3ffb0cb0214_0.jpg?w=512",
            "name": "A quaint"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/2a94d3f8-f33a-4347-9c27-e30dca807179/generations/3393de7d-747e-4454-94b9-08e8b0562177/variations/alchemyrefiner_alchemymagic_2_3393de7d-747e-4454-94b9-08e8b0562177_0.jpg?w=512",
            "name": "Rustic S"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/dacc7652-570f-4b02-8785-b3c0c908fb63/generations/193fc14f-9881-43da-8a9e-7cb280911dff/variations/Default_A_terrifying_reptilian_creature_towering_in_height_ris_0_193fc14f-9881-43da-8a9e-7cb280911dff_0.jpg?w=512",
            "name": "A terrif"
        },
        {
            "liked": false, "suggested": true, "library": false, "uri": "https://cdn.leonardo.ai/users/6d5c1440-16f6-4543-b323-e01f3f75b4df/generations/87c06eb7-3551-4b16-9ba7-86af0214e6f7/variations/Default_Product_composition_displayed_against_an_elegant_softf_0_87c06eb7-3551-4b16-9ba7-86af0214e6f7_0.jpg?w=512",
            "name": "Product "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/38bc4a6d-3aec-461b-825e-a6919c8a40e4/generations/b774f0a6-0be2-49c2-b55f-fdf52f6b6410/variations/Default_The_Amazon_River_sunset_0_b774f0a6-0be2-49c2-b55f-fdf52f6b6410_0.jpg?w=512",
            "name": "The Amaz"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/21d77c25-f92b-474c-b7e7-585cad036804/generations/6f068611-c37e-49d1-bbab-69348e5423be/Leonardo_Anime_XL_Give_a_vampire_animal_paint_running_lines_1.jpg?w=512",
            "name": "Give a v"
        },
        {
            "liked": true, "suggested": false, "library": true, "uri": "https://cdn.leonardo.ai/users/d64aab84-4d11-4084-bcce-e27ce0fb1428/generations/69959b4b-b570-4652-babb-f4857d1da673/Leonardo_Kino_XL_A_mysteriously_captivating_woman_exudes_tranq_3.jpg?w=512",
            "name": "A myster"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/2230a890-7230-4f79-a6bf-71ce24652bcd/generations/df3d406a-bc8d-4050-8acf-41ad4060a630/Leonardo_Phoenix_A_powerful_barbarian_elf_stands_proudly_clad_3.jpg?w=512",
            "name": "A powerf"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/bf386f58-4382-4e6d-a3da-af7bc9f31944/generations/acc3c54c-6ae9-473f-be4e-161efa2d40b5/AlbedoBase_XL_Tattoo_design_black_and_grey_for_upper_arm_of_a_1.jpg?w=512",
            "name": "Tattoo d"
        },
        {
            "liked": false, "suggested": true, "library": false, "uri": "https://cdn.leonardo.ai/users/569ed115-9b08-4bcb-b3fb-1d7a5f70839f/generations/47f189db-bbbf-4590-9193-e9c77107c9ca/Leonardo_Kino_XL_Crer_moi_le_portrait_dune_femme_brune_adulte_1.jpg?w=512",
            "name": "Créer mo"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/ca73cb49-1ebd-4eaf-a96b-1b0938b559f8/generations/c14d199a-7b69-4488-838c-01563cadf770/Leonardo_Lightning_XL_Belle_femme_blonde_0.jpg?w=512",
            "name": "Belle fe"
        },
   
        {
            "liked": true, "suggested": false, "library": true, "uri": "https://cdn.leonardo.ai/users/f56f9f16-a544-408a-ad3f-d7ffd75353f5/generations/9ceda17c-72b4-41aa-a351-bd2273362adc/AlbedoBase_XL_graphic_pictographs_and_signs_for_the_zoo_3.jpg?w=512",
            "name": "Graphic "
        },
        {
            "liked": true, "suggested": true, "library": false, "uri": "https://cdn.leonardo.ai/users/afe62c5f-cb8c-4430-93ad-e2519f0deb1d/generations/bb72dc5a-1565-4af6-910b-905cb7ab7249/SDXL_10_Countless_things_and_phenomena_in_the_heavens_and_the_0.jpg?w=512",
            "name": "Countles"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/983d53c6-e592-40b2-b336-4cfbff693527/generations/8df59896-a364-4f0b-893c-554e19d6d3a2/Leonardo_Anime_XL_This_image_depicts_a_serene_city_street_scen_2.jpg?w=512",
            "name": "This ima"
        },
        {
            "liked": false, "suggested": true, "library": false, "uri": "https://cdn.leonardo.ai/users/1a46d3b0-a6fb-4b29-9fce-7d6de16f0b3a/generations/a2798fa3-ee76-4253-b673-1835f6a9948f/3D_Animation_Style_A_round_blue_creature_with_there_eyes_on_th_0.jpg?w=512",
            "name": "A round "
        },
        {
            "liked": false, "suggested": false, "library": true, "uri": "https://cdn.leonardo.ai/users/d950ccad-810c-4dca-bcbd-ff5ae2e4943e/generations/1e546ba8-9bae-4319-9b08-b1bd53beb7c4/Leonardo_Phoenix_Create_a_Seattle_Penthouse_with_hardwood_floo_2.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": true, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/3727f893-2b0f-4b5f-877d-159174d57cf5/generations/5571c207-feb2-4053-b92d-f534945f8ff8/Leonardo_Anime_XL_Atena_Anime_illustration_of_Athena_Goddess_o_1.jpg?w=512",
            "name": "Atena: &"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/23a464d0-be8f-44f9-9434-4b619e551045/generations/8ed27ada-1876-4af2-83af-6681f7eea50d/Leonardo_Kino_XL_A_large_circular_logo_of_a_Yin_Yang_with_all_2.jpg?w=512",
            "name": "A large "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/ec8815a3-0aaa-4573-b918-8d0e46173300/generations/901059c8-038d-4c2f-9b64-ae2555098602/Leonardo_Anime_XL_a_painting_of_a_castle_on_a_cliff_with_a_bea_1.jpg?w=512",
            "name": "A painti"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/589a7b1e-484f-4fdb-b74a-bba6d3d586cb/generations/c3c6d61f-695e-4064-82a1-d595aa489249/Leonardo_Phoenix_Imagine_a_stunning_2dimensional_realm_crafted_0.jpg?w=512",
            "name": "Imagine "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/db76fc3a-f2d1-4467-9954-33820b989239/generations/135ba1c3-9818-4464-9a2d-cc1dd6e929e5/Leonardo_Phoenix_Skeleton_drinking_a_coffee_halftone_style_bla_1.jpg?w=512",
            "name": "Skeleton"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/56c67ec1-9b3b-482e-ad9d-49cfc2bed322/generations/4cc6aba3-a1ef-4703-9c59-405304aa0244/Leonardo_Phoenix_A_breathtaking_ultrahighresolution_illustrati_0.jpg?w=512",
            "name": "A breath"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/52bb700a-b674-4ec5-98ae-84a748145a56/generations/619ebf18-3184-4eb2-9ae2-67410371a39e/Leonardo_Anime_XL_Create_an_intense_evocative_portrait_in_the_1.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/286d936b-6b39-41fc-a3ad-fff4afa8c8b1/generations/54b1d09d-0c14-409e-b535-e3c5ed1eb2db/Leonardo_Anime_XL_anime_A_white_female_warrior_meditating_in_t_2.jpg?w=512",
            "name": "Anime A "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1aca0321-e844-426d-81fc-3d5d5ae01f5d/generations/db70dced-6d6c-47e2-9272-d71b534701bf/variations/Default_type_Viral_anime_nature_wallpaper_subject_Landscape_wi_1_db70dced-6d6c-47e2-9272-d71b534701bf_0.jpg?w=512",
            "name": "{type= &"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/0350e6d4-2626-471b-9b20-87ba7275b7c4/generations/0dd85115-b188-49d8-ada5-6538a36c4551/AlbedoBase_XL_Emerging_from_the_eerie_depths_of_a_polaroid_cro_1.jpg?w=512",
            "name": "Emerging"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/941b4069-62fe-4eb4-8e11-9131d8e01fb5/generations/f2405ac2-5f90-468e-9d91-c7a9fda21dd6/Leonardo_Kino_XL_A_rose_sitting_on_a_table_1.jpg?w=512",
            "name": "A rose s"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/79edc020-2adb-46d5-84a6-b92a834ccb91/generations/17023053-505e-4e0b-9b4a-ae4592c95c33/DreamShaper_v6_strong_and_curvy_barbarian_woman_standing_in_a_0.jpg?w=512",
            "name": "Strong a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/07a1d506-4833-4bbf-b37a-b92217593f5a/generations/bf89ddea-9e4c-4ea8-a07f-d97da5545662/Leonardo_Kino_XL_Back_cat_reading_a_tarot_card_1.jpg?w=512",
            "name": "Back cat"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/e661f892-f656-4441-8d80-462145721d3e/generations/3faac573-8ca0-4a25-93aa-18c7e89b600d/variations/Default_Woman_with_athletic_build_black_shoulder_length_hair_w_2_3faac573-8ca0-4a25-93aa-18c7e89b600d_0.jpg?w=512",
            "name": "Woman wi"
        },

        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d69e4121-f2b8-43aa-bea2-2acf417620a4/generations/f97d2d99-bd53-480d-be6f-5c53f7977bd8/Leonardo_Anime_XL_Villain_Man_standing_long_coat_in_black_a_fr_0.jpg?w=512",
            "name": "Villain "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/59d16a91-fd2d-4019-9785-077aa16a979d/generations/a2e6cb76-8333-42df-8790-ebc28e60f5c9/variations/alchemyrefiner_alchemymagic_2_a2e6cb76-8333-42df-8790-ebc28e60f5c9_0.jpg?w=512",
            "name": "A man wi"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/274adc23-788e-40fb-b72d-797135ffb86d/generations/8e6b007b-33de-4724-843a-152536253ff9/variations/alchemyrefiner_alchemymagic_2_8e6b007b-33de-4724-843a-152536253ff9_0.jpg?w=512",
            "name": "A symbol"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/760e2684-211b-47d0-85b6-5a9d459c2f06/generations/c7540365-e134-4a64-8232-5548a1e6455b/Leonardo_Phoenix_In_a_small_slanted_ceiling_room_a_modern_offi_0.jpg?w=512",
            "name": "In a sma"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/7d6fefa5-0f41-4adc-8913-98e7e2e4de39/generations/307c36a9-4b96-44eb-9bae-dd28099259c8/Leonardo_Phoenix_A_mesmerizing_highcontrast_cinematic_photogra_0.jpg?w=512",
            "name": "A mesmer"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/bc573a1a-5cdc-44e7-809b-84a9e28a5492/generations/7ff728fc-06fa-4bc7-9a93-158ea4eccf13/Leonardo_Anime_XL_8K_resolution_high_image_quality_high_image_0.jpg?w=512",
            "name": "8K resol"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1bd98166-c1f4-4078-bdd9-451ad3bbbf61/generations/107f5687-1153-4493-b04d-9b8e81615991/Leonardo_Anime_XL_Battle_map_for_trpgroom_medieval_dark_fantas_0.jpg?w=512",
            "name": "Battle m"
        },

        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/bfc7d474-c6ea-4312-880c-3eba63657aa3/generations/099d986e-649f-4da4-8197-7f2d32253cea/variations/Default_Jesus_Christ_with_extended_arms_inviting_people_to_fol_1_099d986e-649f-4da4-8197-7f2d32253cea_0.jpg?w=512",
            "name": "Jesus Ch"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d4590be8-f735-4f55-b003-2d0f07df0020/generations/83c3fa87-334f-4ec3-aad9-bb366798a418/Leonardo_Anime_XL_Give_a_butterfly_animal_paint_running_li_0.jpg?w=512",
            "name": "Give a b"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d7b8bba7-e921-4b3b-a8bf-5a68a6108de2/generations/230443cc-da17-4543-8822-a3bdde30d3f7/AlbedoBase_XL_Portrait_fminin_expressionniste_style_inspir_dEd_2.jpg?w=512",
            "name": "Portrait"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/8602e064-c2e6-43de-a613-26e06857e311/generations/760b26e9-2ebd-479e-8360-4fcd2b3b41bc/AlbedoBase_XL_In_a_mesmerizingly_vibrant_display_intricate_swi_0.jpg?w=512",
            "name": "In a mes"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/10954245-0d0c-47ee-adde-f6ce3cd5b436/generations/bbccd5dd-de8f-4e5c-950f-dec125285d13/Leonardo_Phoenix_a_mesmerizing_ultrahighresolution_illustratio_0.jpg?w=512",
            "name": "A mesmer"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/adfe7cfb-d82a-48f4-a7f3-1352488da0c7/generations/d0b9680a-0ce6-4dd1-a049-c36f0624a43b/Leonardo_Anime_XL_The_stone_shows_the_exterior_and_surrounding_1.jpg?w=512",
            "name": "The ston"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/75fab9fd-0859-4396-9a2e-ec228f9c8744/generations/7ff7e4dd-b0f7-4f2f-bb28-ccbd575d144a/variations/alchemyrefiner_alchemymagic_3_7ff7e4dd-b0f7-4f2f-bb28-ccbd575d144a_0.jpg?w=512",
            "name": "A breath"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/af7e295e-940d-4f0e-bcbe-48e94e2304f1/generations/869bac9f-1eb8-4541-b06d-b18f1eac5a1a/variations/Default_Dragon_Fae_Male_66_with_obsidian_silk_hair_shoulder_le_1_869bac9f-1eb8-4541-b06d-b18f1eac5a1a_0.jpg?w=512",
            "name": "Dragon F"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/73b02f8b-6cae-4f98-968b-e5ef9b07d1c3/generations/7ba2d30e-55b1-4e24-9638-2ba273802939/Leonardo_Phoenix_A_cinematic_vectorized_digital_professional_c_1.jpg?w=512",
            "name": "A cinema"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/5de3384a-7a1c-4271-bcf1-42535a0de6ef/generations/192fbdb6-ad44-414a-aadc-44ca50780230/Leonardo_Kino_XL_Young_22_years_old_caucasian_woman_green_eyes_1.jpg?w=512",
            "name": "Young 22"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/7942ca18-b61a-44cf-a3c2-ba643dc40964/generations/156ee152-0522-427b-906d-ac6a5d26f931/Leonardo_Anime_XL_A_fantasy_mesmerising_realistic_and_cinemati_0.jpg?w=512",
            "name": "A fantas"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/5dc9dd1b-8674-4be7-948f-2aac9bce7ab6/generations/4e8a610a-c488-4509-b427-5e45d7f0010c/Leonardo_Phoenix_Highly_stylized_closeup_portrait_of_a_wolf_me_0.jpg?w=512",
            "name": "Highly s"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/da54c4aa-adf8-41b0-915f-7802f24a0512/generations/aa98b88c-09b6-4401-b40d-521c19f3d5ef/variations/Default_Create_an_intense_animestyle_illustration_of_a_powerfu_2_aa98b88c-09b6-4401-b40d-521c19f3d5ef_0.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/96ff03b2-b57a-4f41-a3fc-ad6bb25bdb8a/generations/9587dabb-e811-48e9-a2f1-cab52c547b64/variations/Default_imagine_prompt_Viral_anime_nature_wallpaper_in_4K_qual_2_9587dabb-e811-48e9-a2f1-cab52c547b64_0.jpg?w=512",
            "name": "/imagine"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/58314a2c-9afc-43f0-9b35-8130e89a569d/generations/c72d6b8b-189d-4725-b621-eb16a0153f86/Leonardo_Phoenix_a_hyperrealistic_intricately_detailed_and_lus_1.jpg?w=512",
            "name": "A hyper-"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/93d1451b-44ef-4a22-aacb-e555a65da050/generations/494adc1d-b033-40a4-a3e9-d57701bf23f8/variations/Default_Anime_monster_portrait_wallpaper_2_494adc1d-b033-40a4-a3e9-d57701bf23f8_0.jpg?w=512",
            "name": "Anime mo"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/7a91b945-be52-4f0d-9aed-183244959ef0/generations/60c2c05e-4495-4af2-be15-c478acd3135b/AlbedoBase_XL_Design_a_book_cover_for_an_fantasy_romantic_nove_1.jpg?w=512",
            "name": "Design a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/2e39961c-07ef-45a2-8099-782538e6682c/generations/a4729ff0-bd7e-4920-81d1-6c12cc96e84b/variations/Default_Tall_slender_brown_woman_with_curly_hair_and_large_exp_2_a4729ff0-bd7e-4920-81d1-6c12cc96e84b_0.jpg?w=512",
            "name": "Tall"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/5033ec41-79ee-475b-8b7a-8d6638cdef5e/generations/c9bc4638-03fa-4bc4-9ae2-fad6f4bb7ced/variations/Default_Imagen_de_un_barco_pirata_hermoso_y_en_medio_de_una_tu_1_c9bc4638-03fa-4bc4-9ae2-fad6f4bb7ced_0.jpg?w=512",
            "name": "Imagen d"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1e139bc3-2960-4936-84fc-5e70462e7689/generations/6a069b64-3a96-45a6-8577-346dca404ce5/variations/Default_imagine_prompt_Vibrant_color_manga_scene_in_4K_quality_3_6a069b64-3a96-45a6-8577-346dca404ce5_0.jpg?w=512",
            "name": "/imagine"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/8356364e-66dc-4930-8073-345a86ac6139/generations/83a31d5f-afc0-4308-91d7-7e36f8c98fb5/Leonardo_Diffusion_XL_A_female_fighter_in_armor_decorated_with_1.jpg?w=512",
            "name": "A female"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/766a8729-3858-46a0-a926-15473b5ddffc/generations/f5984d15-ce35-472d-8b59-b7473496c55e/Leonardo_Phoenix_Greek_statue_with_a_semitransparent_body_insi_1.jpg?w=512",
            "name": "Greek st"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/740da029-1757-4a9c-947f-9b2b2ef110b4/generations/03cd42b5-7b06-4641-8cb9-afd38fd02229/Leonardo_Phoenix_Create_an_image_of_a_majestic_German_Shepherd_3.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d0e06f13-c80f-47fa-a643-1eeb85bec944/generations/38966ee3-f0b0-4746-8b31-cd2be42025f5/Leonardo_Phoenix_Create_a_3D_Disneyinspired_scene_of_Noah_a_ma_0.jpg?w=512",
            "name": "“Create "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d58019f0-5eb6-490c-9067-b28b5dba8a4a/generations/55a6c090-4fc4-402c-851c-b1cd39356d61/Leonardo_Phoenix_This_is_a_face_woman_silhouette_A_supremely_d_1.jpg?w=512",
            "name": "This is "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/4954f833-2375-486c-ae9d-ae155308dddf/generations/24b6634a-1057-43e6-a7de-8e8d9295e0ca/Leonardo_Kino_XL_Beautiful_blonde_woman_with_blue_eyes_Instagr_4.jpg?w=512",
            "name": "Beautifu"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/653aa3d7-8a6b-4272-acb2-acdf6f64dc33/generations/646197a6-0bbe-4ca2-bb4f-9166c9a88b33/Leonardo_Diffusion_XL_a_60yearold_woman_blonde_hair_on_shouldr_2.jpg?w=512",
            "name": "A 60-yea"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/a98fa63e-8a2b-489a-9ead-c96d2e8495d9/generations/7f5462e7-bc67-4974-a32b-6c79f3de81d3/variations/Default_Soft_focus_a_woman_in_30s_have_wavy_orange_hair_and_da_0_7f5462e7-bc67-4974-a32b-6c79f3de81d3_0.jpg?w=512",
            "name": "Soft foc"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/8cbe76e1-6cd6-4475-a25f-fb904ee8088b/generations/dc351ba8-4856-4d5b-9598-7dc63593b83d/DreamShaper_v6_Anime_0.jpg?w=512",
            "name": "Anime би"
        },
    
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1a72ae75-7cfd-4f2a-a6b4-8f423d09a240/generations/c3ee3c77-b4cd-4aca-b2c9-27d555c42317/Leonardo_Phoenix_Create_a_vibrant_motivational_sales_poster_fo_7.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/95fa1428-c15f-4274-a272-dab7c71cd5db/generations/2ec84dba-6282-4964-b16c-354b3c359ac1/variations/UniversalUpscaler_2ec84dba-6282-4964-b16c-354b3c359ac1.jpg?w=512",
            "name": "Capture "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/219a917b-8a68-4e0c-a07e-11739b882947/generations/2679155f-abfa-45e6-a465-db04c2229c59/Leonardo_Phoenix_A_vibrant_handdrawn_galaxy_illustration_featu_2.jpg?w=512",
            "name": "A vibran"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1c23fa65-09be-451b-bfd8-7c1b07049488/generations/af01970b-d036-4d2e-9f29-cca48d6706f8/Leonardo_Phoenix_Cartoon_60_year_old_Nonna_Full_body_portrait_0.jpg?w=512",
            "name": "Cartoon "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b81e2661-78b9-4ab8-a34d-aee35e339898/generations/ac059bca-cdc1-48e1-b9bd-54b699ec4faf/variations/alchemyrefiner_alchemymagic_3_ac059bca-cdc1-48e1-b9bd-54b699ec4faf_0.jpg?w=512",
            "name": "Volumetr"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/e4344890-4fcc-4c04-8029-900f9699b831/generations/592059d8-a054-4ef4-b13e-bc45295c0ac0/Leonardo_Anime_XL_Night_time_The_setting_is_a_fantasy_town_in_0.jpg?w=512",
            "name": "Night ti"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/60c54bd6-a3b0-42a7-94e9-704679178a31/generations/4dd74cc3-56d4-42a2-9509-582c977502b5/AlbedoBase_XL_In_the_ethereal_turquoisemagenta_glow_of_underwa_0.jpg?w=512",
            "name": "In the e"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/0b2929ff-e280-4af3-90af-103acbb0ee3f/generations/b2a2fc6a-417f-48b1-9336-9f22b13054b3/b2a2fc6a-417f-48b1-9336-9f22b13054b3.jpg?w=512",
            "name": "&quot;Im"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/f0ceef57-ae10-4b0f-a634-44b0e40881df/generations/070a5785-5722-4183-b411-edb847f9f113/Leonardo_Lightning_XL_Descendants_of_Genghis_in_Asia_1.jpg?w=512",
            "name": "Descenda"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/eb8c97ac-d04e-4b03-ae00-b28109803362/generations/48adc74d-5de5-445e-a72c-5f11132a132d/Leonardo_Phoenix_The_artist_cat_receiving_an_award_at_a_presti_1.jpg?w=512",
            "name": "The arti"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/84c5f396-3dfb-49e8-b531-6b65d16cf21c/generations/5cc1cf87-fa18-4e96-8c36-c5c7f3d65114/Leonardo_Phoenix_a_highly_detailed_3D_render_of_a_plump_and_ad_0.jpg?w=512",
            "name": "A highly"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/ceab191f-6d1e-49ef-b1ee-47aac529896e/generations/ce911743-6faa-4f56-880a-8716691e9099/Leonardo_Kino_XL_Cool_illustrative_artwork_inspired_by_1980s_h_0.jpg?w=512",
            "name": "Cool ill"
        },
     
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/aaa8670a-824e-4927-9a60-fa312b14b24b/generations/a0683b90-459d-4ded-bd8e-981bac2c13b9/Leonardo_Anime_XL_Create_an_intense_animestyle_illustration_of_1.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/513e5a32-78d9-4062-82d4-6b057cf21645/generations/160c24a6-105c-47b0-891f-af62cf26cdc0/variations/Default_epic_warrior_with_black_hair_AND_RED_EYES_ATTACKING_WI_1_160c24a6-105c-47b0-891f-af62cf26cdc0_0.jpg?w=512",
            "name": "Epic war"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/26412c79-8886-4c9c-ba22-114c14dd825b/generations/936deae9-1c33-4827-a2b2-bd8c9c50625b/Leonardo_Kino_XL_Craft_an_image_of_2_powerful_werewolves_emerg_1.jpg?w=512",
            "name": "Craft an"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/028fa669-9a45-4c68-97ae-6025acd1214f/generations/a60d8b73-4f99-4668-8eba-55be4ff534b2/variations/alchemyrefiner_alchemymagic_2_a60d8b73-4f99-4668-8eba-55be4ff534b2_0.jpg?w=512",
            "name": "Illustra"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/34d8b28f-1e5b-439b-bb8f-e5c195b96589/generations/d3da7b5c-a60d-4b9f-916f-2ab19eae0644/Leonardo_Anime_XL_full_body_A_beautiful_drow_elf_dark_elf_woma_2.jpg?w=512",
            "name": "Full bod"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b1aff918-6d3e-4817-b11a-c700950f34c0/generations/a92ca232-d17f-4b20-8198-55f1a49ab475/Leonardo_Anime_XL_Animestyle_portrait_of_a_man_with_dark_blueb_0.jpg?w=512",
            "name": "Anime-st"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/fe359450-650c-490a-bf7a-917c038dc0a7/generations/00fe15cd-afa0-4c0d-8126-2b805a3fbc57/Leonardo_Phoenix_Create_a_highly_detailed_symmetrical_tattoo_i_2.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/a3f0608c-b65b-4da1-803b-2abb48a98535/generations/28a71be6-da75-4cbf-9a49-465fda11b920/variations/alchemyrefiner_alchemymagic_1_28a71be6-da75-4cbf-9a49-465fda11b920_0.jpg?w=512",
            "name": "Artwork "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/fe956731-4799-4ad7-b335-28d22be53f53/generations/aee9fe72-32b4-4e22-99a2-d6f1c25febc6/variations/Default_A_photorealistic_Instagram_model_female_with_an_ovalsh_3_aee9fe72-32b4-4e22-99a2-d6f1c25febc6_0.jpg?w=512",
            "name": "A photor"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/bae497d2-4669-4315-9d0c-3026e0a9723b/generations/1bd3191d-732f-4c98-ad4f-7e3e131e176d/Leonardo_Phoenix_A_minimalistic_graphics_of_a_white_boat_cu_ou_3.jpg?w=512",
            "name": "A minima"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/872643a8-b7da-43c3-9163-3a0a39540ad8/generations/1d2386c4-2786-4d48-b550-681a3952baf7/Leonardo_Kino_XL_Pop_art_style_tattoo_female_gangsta_neon_acce_3.jpg?w=512",
            "name": "Pop art "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/c3ba6593-7f6e-4545-8cc6-08a3e38861c3/generations/c658e76b-2657-4738-a61b-add50f561506/c658e76b-2657-4738-a61b-add50f561506.jpg?w=512",
            "name": "An abstr"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/4b94d285-249f-46ad-9304-910ad40bdcf9/generations/5e74949a-36ba-43d3-8641-1e1259567881/variations/Default_cinematic_photo_A_beautiful_queen_with_long_flowing_w_0_5e74949a-36ba-43d3-8641-1e1259567881_0.jpg?w=512",
            "name": "Cinemati"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/11ccb264-e5c9-42e6-9cbd-493af70c2d00/generations/51b210c4-6013-49eb-8871-6be00652c99c/Leonardo_Lightning_XL_Bohemians_Silhuettes_women_and_men_Victo_1.jpg?w=512",
            "name": "Bohemian"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/ff8015b0-cb85-416b-a17c-3871ce62805a/generations/f5cea12d-d59d-4570-868f-6b93b5b18c8a/f5cea12d-d59d-4570-868f-6b93b5b18c8a.jpg?w=512",
            "name": "A skelet"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/0398166a-94ba-49fe-a7ef-9e4fac6268ca/generations/d3800e42-48fc-4a98-84d7-ccaeed4d0a3a/variations/alchemyrefiner_alchemymagic_0_d3800e42-48fc-4a98-84d7-ccaeed4d0a3a_0.jpg?w=512",
            "name": "Minimali"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/04f915c8-0d14-4111-ab4f-528cc6915a30/generations/12940dd4-eb55-4dd8-9a21-7f3ec8c42ac8/12940dd4-eb55-4dd8-9a21-7f3ec8c42ac8.jpg?w=512",
            "name": "A viral "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/5d9f8eb8-60f1-44a1-835a-044466249026/generations/95887022-4457-418a-bb7c-7b3708525b58/Leonardo_Kino_XL_Cool_illustrative_artwork_inspired_by_1980s_h_1.jpg?w=512",
            "name": "Cool ill"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/85174190-4f22-4bef-9f1b-85e491da321f/generations/9c9fb543-dc4d-43ae-8b3c-04a68b330ac0/Leonardo_Anime_XL_Kyoto_Animation_stylized_anime_A_Gorgeous_f_3.jpg?w=512",
            "name": "Kyoto An"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/13c9276c-6afd-42d8-b51f-3a9f56f97882/generations/ddad302f-a1a8-4913-9d3b-1aa3ac308332/Leonardo_Kino_XL_A_mystical_forest_shrouded_in_mist_with_soft_0.jpg?w=512",
            "name": "“A mysti"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/6d93bcdd-c9a9-46ea-bd09-237e5f0443f1/generations/d9b917cc-fb6d-4753-b01e-68e77a3b2328/Leonardo_Phoenix_Cat_story_In_a_small_village_nestled_between_0.jpg?w=512",
            "name": "Cat stor"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/d0647a47-44c6-4b66-895e-4c59168f1127/generations/1e9d986b-68ec-4c2a-92c2-c14dbc51c958/AlbedoBase_XL_Fun_cartoon_style_cat_tattoo_in_black_and_red_co_2.jpg?w=512",
            "name": "Fun cart"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/3d5e7d2a-6020-4909-a809-8eaeff6b1511/generations/d5ade939-ba1f-4fcf-a8e9-b47b3cbca46c/Leonardo_Phoenix_A_dramatic_metal_band_logo_set_against_a_rich_0.jpg?w=512",
            "name": "A dramat"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b2eaeb9c-93dd-4911-9258-8ab9bdafef44/generations/a86855a9-d78e-4b4d-9306-614cfb0b8c73/variations/Default_8k_3d_render_highest_quality_best_anime_quality1_7_a_w_0_a86855a9-d78e-4b4d-9306-614cfb0b8c73_0.jpg?w=512",
            "name": "(8k"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/ddd3e9f2-e6da-4d76-a284-64fee204362c/generations/13099e79-aba7-443d-99a8-d08b7af6427f/Leonardo_Phoenix_A_highenergy_expressive_and_masterful_interpr_0.jpg?w=512",
            "name": "A high-e"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/7be6100a-cfe0-47ae-9d33-2c88a34397af/generations/ace75406-198d-47d4-bb59-261bc687076a/variations/Default_A_mystical_forest_shrouded_in_mist_with_soft_glowing_p_1_ace75406-198d-47d4-bb59-261bc687076a_0.jpg?w=512",
            "name": "“A mysti"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/98a0f33d-7787-451f-849e-47959ebf9f85/generations/bdc0f254-f13c-4ab8-9b46-c99f0f5da9eb/Leonardo_Anime_XL_Lucia_stands_tall_her_presence_effortlessly_2.jpg?w=512",
            "name": "Lucia st"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/12a6433a-10ef-4048-a51d-74c66fd18e30/generations/ea17ef49-4e82-4b5b-9bf1-95b51e8c61af/variations/alchemyrefiner_alchemymagic_0_ea17ef49-4e82-4b5b-9bf1-95b51e8c61af_0.jpg?w=512",
            "name": "A stunni"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/604030ce-2a71-4773-9327-8337a65b8e6d/generations/b1581a95-bd39-4c3f-a2a7-aae0946ac751/Leonardo_Anime_XL_A_serene_scene_depicting_a_beautiful_adult_w_1.jpg?w=512",
            "name": "A serene"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/668cf1d3-a2b3-49a0-ba1b-3feef5bda517/generations/604e0b65-1e61-47ef-b8a8-d83031501b6e/Leonardo_Anime_XL_anime_semirealism_highly_detailed_illustrati_1.jpg?w=512",
            "name": "{anime s"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/c44ea544-9409-4ce1-ac2f-1ea4bf9f192c/generations/4894d289-715a-4383-b940-a7d7c65f1362/Leonardo_Kino_XL_Cool_illustrative_artwork_inspired_by_1980s_h_0.jpg?w=512",
            "name": "Cool ill"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/a9ad01da-e463-4770-9358-ceb0670573ac/generations/f006b4b0-1659-46b6-8e81-6dd7a1d75373/Leonardo_Anime_XL_anime_style_blackbeanie_brunette_adult_woman_0.jpg?w=512",
            "name": "Anime st"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/bda27d6e-5ad4-4e83-a860-1a437c81d458/generations/d673addc-4371-4ee0-8c16-152a2391af10/Leonardo_Anime_XL_Manhua_drawing_of_two_women_Long_flowing_bla_0.jpg?w=512",
            "name": "Manhua"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/f4d4f74e-5a68-417a-b5ce-9c28ac76de02/generations/061beb47-b707-4399-9ced-e5aedc354507/Leonardo_Phoenix_Logo_design_LOGANs_AI_Profit_Accelerator_prof_3.jpg?w=512",
            "name": "{Logo de"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/8bb03717-5c9a-47bf-ae21-8bd374f1f053/generations/0076f2dc-d62a-4f9f-ab54-0e1f417d7297/Leonardo_Phoenix_Un_pasillo_largo_obscuro_e_inquietante_y_con_1.jpg?w=512",
            "name": "Un pasil"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/9fdbec94-a897-4cf4-b0e2-baacf6eea026/generations/592209c2-6d92-4f18-8a92-0af7dab1c87f/variations/Default_Mansions_with_a_forest_view_7_592209c2-6d92-4f18-8a92-0af7dab1c87f_0.jpg?w=512",
            "name": "Mansions"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/454f40ec-e038-406f-8229-b203bb593250/generations/3bc1bbe0-580b-4cdc-914c-e5d87d475a8e/variations/Default_16K_16K_high_resolution_with_3D_A_fullbody_128k_Bluray_0_3bc1bbe0-580b-4cdc-914c-e5d87d475a8e_0.jpg?w=512",
            "name": "16K"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b18819d3-b1f1-4c3c-8a18-8c2b55b75984/generations/829a70a5-b3e1-4604-b8de-259af14c4b68/829a70a5-b3e1-4604-b8de-259af14c4b68.jpg?w=512",
            "name": "The woma"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/60c6ff7a-7e36-4af4-a9ed-e48fbc43271b/generations/6649f57d-74d7-44b9-8f86-67f169fe1167/Leonardo_Lightning_XL_A_shimmering_nebulous_manticore_its_form_3.jpg?w=512",
            "name": "A shimme"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/44418dee-2e61-43e7-a52a-7b5665367124/generations/4952f2c0-e413-44b7-a1b5-4bb2a007c6f8/Leonardo_Phoenix_A_Dreamlike_vibrant_and_cinematic_photograph_0.jpg?w=512",
            "name": "A Dreaml"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/1da1f7a9-5b20-44b4-8f96-56dcd4440f23/generations/cb315620-0d99-40ef-a56d-1a37154e647e/variations/Default_In_a_beautifully_crafted_cozy_night_scene_two_anime_ch_2_cb315620-0d99-40ef-a56d-1a37154e647e_0.jpg?w=512",
            "name": "&quot;In"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/480f8d00-1da0-44fb-b8fa-8ef80d3f493c/generations/b42ef7c0-a57b-4e4b-a3f3-7e08eb0b891e/Leonardo_Lightning_XL_A_photograph_of_a_eternity_ring_with_exc_0.jpg?w=512",
            "name": "**A phot"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/f5f9c1ec-dbc1-4a0b-bb2b-d011a0bb57a9/generations/313ebadd-c52e-47da-89f3-8364cfa1776b/Leonardo_Kino_XL_A_handsome_young_Indonesian_man_is_meditating_2.jpg?w=512",
            "name": "A handso"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/f3572dc6-407a-4385-b7da-d1308e6fd3d5/generations/ce7cca15-4e32-44ab-b8d7-b8f96fa3cf61/Leonardo_Anime_XL_A_30_year_old_Victorian_noblewoman_with_blac_3.jpg?w=512",
            "name": "A 30 yea"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b5abb39b-d495-4863-8bda-037eb9143254/generations/70624043-7fc4-4312-9ddb-01b677612e01/variations/UniversalUpscaler_70624043-7fc4-4312-9ddb-01b677612e01.jpg?w=512",
            "name": "Photorea"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/934e2d1c-3f35-4205-81c3-e22d066fab84/generations/aff1e5ec-6398-4a25-a065-8e8ff4d5fd4f/Leonardo_Diffusion_XL_my_country_in_the_present_field_by_artis_0.jpg?w=512",
            "name": "My count"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/21630283-d2c7-4a84-bfa5-a3f8e572bced/generations/f837a033-7e38-4c27-a3c5-3124b0e399e0/Leonardo_Diffusion_XL_a_great_crane_flying_with_pink_blossoms_2.jpg?w=512",
            "name": "A great "
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/c12aa0ab-5a2a-4509-907f-3f4485028274/generations/0c8defbb-25b2-4faf-84b7-887c0b73a824/Leonardo_Lightning_XL_Create_a_2D_chibistyle_sticker_of_Isaac_2.jpg?w=512",
            "name": "Create a"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/e0f96324-8b1d-4469-ad09-0489a774b773/generations/b796c9c3-477f-4ba3-b4f6-f9015748c213/variations/Default_Realistic_fulllength_shot_of_a_very_beautiful_woman_wi_3_b796c9c3-477f-4ba3-b4f6-f9015748c213_0.jpg?w=512",
            "name": "Realisti"
        },

        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/9220c701-a391-4206-b423-b51df9cd1695/generations/6bc641bf-07fd-442f-9ff2-f89f6cecf29a/AlbedoBase_XL_A_mystical_scene_depicting_two_tall_woman_figure_0.jpg?w=512",
            "name": "A mystic"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/2f0060b1-adb4-4fef-a65a-24de176d3a21/generations/90c4b9a8-ffb5-48da-9f7b-18275136e130/Leonardo_Anime_XL_2D_anime_illustration_glitchcore_vaporwave_a_3.jpg?w=512",
            "name": "2D anime"
        },
        {
            "liked": false, "suggested": false, "library": false, "uri": "https://cdn.leonardo.ai/users/b4b45e35-66f7-4996-a0e5-58c6e7125d65/generations/d39232e4-9648-40d1-94f6-fe2af51a94d1/variations/Default_Create_an_intense_animestyle_illustration_of_a_cyberpu_1_d39232e4-9648-40d1-94f6-fe2af51a94d1_0.jpg?w=512",
            "name": "Create a"
        },
        
  {
    "uri": "https://cdn.leonardo.ai/users/08a63d25-e0cf-403e-aacb-ae2872aa6d29/generations/ba173928-68dc-43f9-bd76-c82f5f003526/AlbedoBase_XL_the_cutest_little_dragon_with_black_horns_on_hea_2.jpg?w=512",
    "name": "The cute",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/1b15a193-faf0-4c3e-8abc-3d73bb04b9d7/generations/9f03cfe6-3cd3-486a-a9a7-198cf92c4111/Leonardo_Diffusion_XL_Black_little_boy_holding_a_candle_lookin_2.jpg?w=512",
    "name": "Black li",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/7746f7c1-ab22-4731-9636-ad4579d07d69/generations/60afc52b-784a-4b27-b6dd-767abe6093a7/Default_Generate_a_beauty_product_label_for_activated_charcoal_0.jpg?w=512",
    "name": "Generate",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/2981dc98-7c5e-4f87-8981-0336917ceefe/generations/7220abc9-91fc-45ba-a02f-b20ed9dd8730/Leonardo_Diffusion_XL_vintage_city_view_in_the_cristmas_Old_Fa_1.jpg?w=512",
    "name": "Vintage ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/30e68f21-4642-4526-b5a4-ff16ee4528ca/generations/01e5b71a-8db2-47f5-928c-7496f8327f42/Leonardo_Diffusion_XL_mountain_landscape_with_lake_van_gogh_st_2.jpg?w=512",
    "name": "Mountain",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/7d595461-f497-4373-aeeb-12430b55b145/generations/522da70d-34b6-4b93-b9d1-a4b81d2d2239/Default_woman_smily_mother_fat_glaphick_0.jpg?w=512",
    "name": "Woman sm",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/9c03761d-7566-4903-bdbf-b8611b2d5b91/generations/aa82d390-f3a6-4ac5-9040-b2283c9841ee/Default_Ad_for_a_yaourt_with_a_cute_blue_and_white_dragon_turn_2.jpg?w=512",
    "name": "Ad for a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/50050485-7701-4e24-ad59-ce7070a06e4d/generations/f39120a4-f376-4041-8d8f-b8dd63e7c43e/AlbedoBase_XL_high_qualityrealistic_skin_tone_worldextremely_d_1.jpg?w=512",
    "name": "High qua",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/405d06a9-3d99-4d13-af44-422123078afd/generations/22e47cbc-f7c3-4cf2-9a3c-845a599ba55b/Absolute_Reality_v16_10_orange_cute_kitten_0.jpg?w=512",
    "name": "10 orang",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/1dfa64d0-7c6f-4554-931d-4415bbd9f3e4/generations/224b3c22-be1b-4d21-ae0d-b603e03af801/Default_A_single_large_pancake_with_a_pat_of_melting_butter_an_1.jpg?w=512",
    "name": "A single",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/33f4a5c5-bd63-4663-9dd3-0990e60f2e38/generations/5a0f6d93-bb24-49e9-bc95-bf76f3a0f168/Default_A_striking_letter_Logo_for_an_Esports_team_called_Glor_0.jpg?w=512",
    "name": "A striki",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/a2966b1e-5ffa-4e80-bdea-072f89ed9968/generations/af99b895-a41d-4795-b448-6b45dba916f5/DreamShaper_v7_a_cartoon_horor_themed_Chucky_doll_brandishing_0.jpg?w=512",
    "name": "A cartoo",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/ef2b9261-039c-4292-8205-7981fe94c84f/generations/d96d58b7-e68e-40f0-b148-37221d3c2906/Leonardo_Diffusion_XL_background_with_books_on_a_shelf_high_re_2.jpg?w=512",
    "name": "Backgrou",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/49fda3f4-86d6-49e5-9d1c-f1537ba7e519/generations/0d5bbd66-0309-4a6a-89a3-953554a6d948/Default_Rear_view_of_a_Beautiful_brown_skinned_5_foot_2_inch_h_1.jpg?w=512",
    "name": "Rear vie",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/d2de3392-fa10-450e-abdc-7cf83d9bae29/generations/9f6416f9-e08f-4357-8116-e2faec131e11/Leonardo_Diffusion_XL_ilusin_de_una_MUJER_indgena_100_aos_desp_2.jpg?w=512",
    "name": "Ilusión ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/4dde1d2b-1deb-4db4-b4c4-c0fac27de352/generations/f8b5fb3d-15cd-4b1b-a089-27677e14549d/Default_A_masterfully_crafted_digital_3D_graphic_design_rich_i_0.jpg?w=512",
    "name": "A master",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/c0327f0f-f5b2-4c71-ac23-0b3c88719739/generations/370f9442-98af-46e9-b238-8e97bbc8b779/Default_Black_hazel_eyesNative_American_male40_years_old_cybe_0.jpg?w=512",
    "name": "Black",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/76af8e0d-ed21-4b42-83c2-abf9b0e7ec15/generations/26692183-60ce-44f8-800c-e1cc1a088df1/Leonardo_Diffusion_teenager_man_Brown_hair_green_eyes_plump_l_1.jpg?w=512",
    "name": "Teenager",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/009c1265-b574-4266-b457-f6d754f5d7fa/generations/6425dcd7-6972-4601-bcf6-bc1a88bb69a8/Default_Cyberpunk_landscape_city_rain_flying_cars_3.jpg?w=512",
    "name": "Cyberpun",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/73f1ccca-7dd9-46db-a7c9-e1f8752e3bc0/generations/4274c49e-6be5-4f30-b4c2-aa7c14932eb7/DreamShaper_v7_Grimoire_of_musicomancy_0.jpg?w=512",
    "name": "Grimoire",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/a49ed7f2-3708-420f-b7fb-45681f6994c8/generations/9faf11e6-972e-49df-9309-cbf0b5790f6c/Default_In_a_deep_and_dark_forest_there_was_an_abandoned_house_3.jpg?w=512",
    "name": "In a dee",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/6525961a-d8f2-4982-a219-dadefa862028/generations/20853cb0-3967-48c3-ab97-ac47c7a74063/Leonardo_Kino_XL_poster_coquette_0.jpg?w=512",
    "name": "Poster c",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/67505c21-8c72-439a-8c1c-e5917e11d9da/generations/1fa3bb7a-3c74-4445-9337-6142fc076504/DreamShaper_v7_Fullbody_Skeleton_Deadly_Abbysal_scary_Death_fr_3.jpg?w=512",
    "name": "Fullbody",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/7015a0ae-0589-4d18-8d92-e9bcac9f8aa2/generations/818bf28b-8a57-46d4-992e-92fac1dc8a1c/AlbedoBase_XL_Highly_detailed_shot_of_an_iridescence_crystal_s_1.jpg?w=512",
    "name": "Highly d",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/ccce6cf3-ea17-4195-af81-652af12ba336/generations/ff3f498e-6bb1-4b12-9900-1b09810a4154/Default_The_cafe_is_decorated_in_a_noble_brown_color_with_smal_1.jpg?w=512",
    "name": "The cafe",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/1a86436e-6ecc-45d6-a444-de53913e4cd7/generations/7a3ce6e7-2989-484f-bcd3-6968344fd170/Default_two_cute_adult_penguins_wearing_a_scarf_laughing_anima_0.jpg?w=512",
    "name": "Two cute",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/f4e5f805-844f-42c7-8f51-b2ed0874f90b/generations/6cbdf658-4482-4207-937c-1c232bff89ca/Default_Spanish_Churros_con_Chocolate_Whimsical_clipart_of_Spa_0.jpg?w=512",
    "name": "Spanish ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/5b9b9a6a-d097-4614-96df-3a4563f3b9d1/generations/26eea1eb-a5ce-4eda-994b-a72e2ab18aad/DreamShaper_v7_Create_an_accurate_and_historically_accurate_de_1.jpg?w=512",
    "name": "Create a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/5dc6d1b5-a333-418b-9358-94e1d4b71855/generations/42d3bd6a-ec5b-4091-a034-76c12dca22bd/Default_slender_male_elf_with_dark_black_skin_and_tightly_brai_3.jpg?w=512",
    "name": "Slender ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/ad8972a2-5b2b-4f23-ba25-f66e05d90c53/generations/6e350a0b-9abf-4357-ac85-ee96c9e63186/Leonardo_Diffusion_XL_a_painting_of_a_small_town_with_a_lake_i_0.jpg?w=512",
    "name": "A painti",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/153c4923-cf22-47af-be8f-44aef18cc5a7/generations/1f5e8a72-1804-4449-b575-b27c874bc42d/Leonardo_Phoenix_A_vibrant_title_graphic_EURODANCE_90s_and_sho_1.jpg?w=512",
    "name": "A vibran",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/7c3e4ad4-8d45-424f-9652-ebb1f5b62b94/generations/968fe66e-ca1b-47ff-a1a5-2260ec4501cc/Default_cricket_2.jpg?w=512",
    "name": "Cricket",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/67e94a9c-4e58-4a62-9643-2fb992515ba5/generations/4d855989-4ecf-4bf3-a247-56d7c6c5ef47/Default_Beautiful_smiling_woman_innocent_and_friendly_look_pin_3.jpg?w=512",
    "name": "Beautifu",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/b7ad06b9-0832-4354-84c3-d7b3d4f3fd1b/generations/327d6fe4-4f00-4e64-a3db-c0c1375646e6/Absolute_Reality_v16_full_body_short_of_ironman_suit_0.jpg?w=512",
    "name": "Full bod",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/d4891fb6-a5b9-4cfc-9a81-cded338e4d1e/generations/1d934ccf-9bf7-486f-a480-5ec2466648e7/Default_A_3yearold_girl_with_artsy_illustration_is_playing_wit_0.jpg?w=512",
    "name": "A 3-year",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/dd687ebf-6cf5-44fa-86fb-5985272cd672/generations/06f52036-0c79-4460-a27d-34b46b392de2/Default_high_quality_8K_Ultra_HD_highly_detailed_Abstraction_O_1.jpg?w=512",
    "name": "High qua",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/fcf87863-3854-4465-a544-46e3c2e2b073/generations/1b9bf329-b2d6-49be-9d9f-52871db0d4a9/AlbedoBase_XL_Immerse_yourself_in_the_chaos_and_glory_of_Aquil_0.jpg?w=512",
    "name": "Immerse ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/d376faf0-db48-4f3f-a00c-830cd94b55a8/generations/e0f3fa64-2896-49bc-a991-2edd387683d7/Leonardo_Anime_XL_A_cloudlike_white_island_floating_at_the_poi_2.jpg?w=512",
    "name": "A cloud-",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/52d05cfd-4b42-486f-afab-415341a914e8/generations/1e4d0509-8354-4ee0-a643-97d36eb18fa0/3D_Animation_Style_An_exquisitely_vibrant_illustration_of_a_su_0.jpg?w=512",
    "name": "An exqui",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/c44a1e4c-9ca4-46db-b668-a08c4b52c045/generations/613d9dd8-c22a-4158-85c2-751176e740b7/Default_advertising_photo_of_chocolate_spread_with_nuts_in_the_1.jpg?w=512",
    "name": "Advertis",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/494984ab-d85c-4b3b-882f-1ddf8e9d4623/generations/4ac7cee8-792e-4031-abc4-6e215a8a8f5b/Leonardo_Phoenix_A_elegant_circular_logo_design_for_Celestial_1.jpg?w=512",
    "name": "A elegan",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/92d0d058-733d-4bbb-92a4-f15418e58339/generations/0768d3fb-03f5-41c7-aea0-dd6189644a5e/3D_Animation_Style_color_purpl_1.jpg?w=512",
    "name": "Color pu",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/80ea2f85-16be-47db-8904-6e3aa7e0a7c8/generations/18b33039-74e3-429b-9283-438c289973e5/Default_crea_la_imagen_original_de_la_noche_estrellada_de_van_2.jpg?w=512",
    "name": "Crea la ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/5c56977f-e63d-4066-b573-105484939ebf/generations/f4d538b9-e9a7-439a-bdee-8409c610724e/Leonardo_Diffusion_XL_a_realistic_scene_of_a_group_of_software_3.jpg?w=512",
    "name": "A realis",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/febc0126-6831-4182-85ec-22a434109558/generations/3ee4c90f-41d5-4cf6-8178-72504c92a61a/Absolute_Reality_v16_A_clown_with_smeared_makeup_crying_2.jpg?w=512",
    "name": "A clown ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/0e669827-4762-4a71-b4f0-18b747916038/generations/ff0db756-de1a-4983-8952-efdd6dc98dbf/Ilustration_V2_technology_texture_landscape_wallpaper_in_paint_1.jpg?w=512",
    "name": "Technolo",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/98007ff7-29ee-438d-b639-011a119893b2/generations/aa60f6bd-c10f-4a59-844e-373700b6aaf2/Default_Visualize_the_moment_when_Odinaka_discovers_Akus_secre_0.jpg?w=512",
    "name": "Visualiz",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/4f3d6b30-6f6a-4114-89a3-8aeddbda83d8/generations/a142da55-d211-42fe-a268-b990791c3222/Leonardo_Vision_XL_Man_seamless15strong_environmental_lightha_3.jpg?w=512",
    "name": "((Man  )",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/604d9fad-edb4-40f3-80ac-3e8ee7c45db2/generations/f6296504-2baf-4057-9f49-549bbbf6045a/AlbedoBase_XL_autos_futuristas_estilo_drift_teniendo_carreras_0.jpg?w=512",
    "name": "Autos fu",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/6740936f-1dd8-45e8-8efa-f5d59bdb6dd3/generations/9e2b728a-fc08-4514-851a-a50d28a190e3/Leonardo_Diffusion_XL_create_a_simulation_image_of_a_reflectiv_0.jpg?w=512",
    "name": "Create a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/961b8492-c291-49f6-afa1-3bad0e1ce74f/generations/6e59f1b4-8c1d-4173-8ad5-232a50a59fca/DreamShaper_v7_A_tiger_with_round_paws_leaping_high_3.jpg?w=512",
    "name": "A tiger ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/0c488c03-8f70-4212-8a35-8877d0abeb19/generations/e5e60871-e7f5-4f26-ad00-c8dc989062f1/Default_Quetzalcoatl_colores_verde_jade_rosa_mexicano_azul_may_0.jpg?w=512",
    "name": "Quetzalc",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/8442b1ac-735f-4748-ae3e-60b68aacb01b/generations/66884f33-8d4c-4667-9346-bb9d2409a671/Leonardo_Diffusion_XL_Dwayne_The_Rock_Johnson_1.jpg?w=512",
    "name": "Dwayne T",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/54c32b9b-379d-4695-9284-519a8b96cabf/generations/1f5d302a-20f5-4d21-b3b5-1253bbe79ecb/Default_Remembering_the_turtles_wisdom_Leo_spotted_a_fish_stru_3.jpg?w=512",
    "name": "Remember",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/c70c385c-5ef4-4780-bc54-a1a1715cee12/generations/757b0c36-5a31-45c2-8a2f-cc250a6f01d5/cat_model_A_cat_modellovelywear_a_seat_beltdriving_in_a_car_0.jpg?w=512",
    "name": "A cat mo",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/0e0da5e9-f8f0-4836-a315-6332cef391de/generations/d99a4064-38bc-492e-85d4-b6d861971e05/Default_abstract_painting_representing_Paraguay_2.jpg?w=512",
    "name": "Abstract",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/be16fe42-d0f6-49b2-9e09-f8340cc75963/generations/a0c34eb0-ade5-4007-8884-a14fc5830b4c/Absolute_Reality_v16_I_want_a_presentation_with_an_electronics_0.jpg?w=512",
    "name": "I want a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/e10dad0d-e075-443f-bbaf-87d6c3ba92a0/generations/6ecd7847-2869-434d-b0c1-cf93254d7ba0/Leonardo_Diffusion_XL_FINE_TREES_funitrue_design_red_and_blue_2.jpg?w=512",
    "name": "FINE TRE",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/92c1b71c-9dde-4b47-8bf0-75bde54e9bc9/generations/cae0a2cf-c2fa-4301-89ad-2ed24c7b0697/Default_Illustrate_a_young_teen_striking_a_martial_arts_pose_o_0.jpg?w=512",
    "name": "Illustra",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/65c97d05-7b69-42f7-94f8-9be331824969/generations/84fca355-bd60-48e2-ae1d-15beb5500942/Leonardo_Diffusion_XL_A_sweet_picture_painted_with_watercolors_1.jpg?w=512",
    "name": "A sweet ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/6bd2e4bb-9b16-406c-8bb7-fc6a6e35f09d/generations/f73ece45-ce93-443c-8593-5a5d850bb4f4/Leonardo_Diffusion_XL_A_fragile_girl_and_a_powerful_Buddha_A_c_3.jpg?w=512",
    "name": "A fragil",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/9b8b3d94-0027-492b-9110-977ce8a2e7a6/generations/9878a134-5400-4651-9ff5-580c41114f6e/AlbedoBase_XL_Adventure_of_a_lifetime_1.jpg?w=512",
    "name": "Adventur",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/8432806b-853d-4da5-b973-581398352b5e/generations/0fdb024c-4fb3-49be-a0ed-0608a9cd31cf/Leonardo_Diffusion_XL_Illustration_of_a_unicorn_wearing_dark_l_1.jpg?w=512",
    "name": "Illustra",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/fce91946-5195-43ff-a128-0cd458fa71d5/generations/6fa66fe4-1448-472a-9a67-fd2e65fb661c/Absolute_Reality_v16_Generate_a_man_detailed_depiction_of_the_1.jpg?w=512",
    "name": "Generate",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/143ba233-589c-49f8-be87-aa3c613515fa/generations/62a337f1-c101-49f6-8cc1-cf899d6edeb5/Default_Chubby_boy_3.jpg?w=512",
    "name": "Chubby b",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/6197711e-c253-4779-b40c-99ada693b43b/generations/3dafad3f-1942-4e38-aea3-9c2d232c9bbb/Leonardo_Diffusion_XL_A_man_at_spacer_1.jpg?w=512",
    "name": "A man at",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/acd99bbf-804d-4406-80ff-452d1879d26d/generations/2a4414ba-d643-4b3f-b119-72fb341085fa/3D_Animation_Style_blue_digital_world_abstract_backgrounds_0.jpg?w=512",
    "name": "Blue dig",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/42896d97-c236-47d9-985f-1fd5da137ee1/generations/04fcf474-5a5f-4e8d-9fde-2fda8a2eff94/Default_show_the_blurring_of_the_boundaries_between_reality_an_1.jpg?w=512",
    "name": "Show the",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/e0bd543e-fbb7-4c95-8d2a-c05c1485b783/generations/55e1a5e1-2249-4939-8f93-8a9dca9a46c6/AlbedoBase_XL_komodo_on_the_canvas_warm_vibes_impressionist_p_0.jpg?w=512",
    "name": "Komodo o",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/88575075-88e8-4cee-857c-03810c4cd0f6/generations/2a3a3460-eccc-447b-8b11-6a971db60a88/Default_Pictures_of_medical_studies_such_as_pictures_of_organs_2.jpg?w=512",
    "name": "Pictures",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/8bdb3eee-ee43-437d-b5c0-de4d38de97a8/generations/e334c941-2720-4b40-b7fe-249bad864a30/Cinematic_Kino_male_wearing_sun_glasses_all_his_body_appearing_3.jpg?w=512",
    "name": "Male wea",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/d825f59a-ccd9-445c-ad0f-ea3d89835eaa/generations/e98ddcd7-21de-4355-aa6e-b082234aab4d/Anime_Pastel_Dream_butterfly_aesthetic_3.jpg?w=512",
    "name": "Butterfl",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/2c6d6041-afaf-4f61-90c2-b989697f9c4e/generations/14576e01-ccf7-447f-a14e-6e767c786d86/Default_Design_a_logo_sleek_stylized_emanating_shimmering_dust_2.jpg?w=512",
    "name": "Design a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/51ae096e-4d71-4a94-b3e7-717b6104ae4f/generations/138c2225-10cb-46b1-a1ed-ecb751f313eb/DreamShaper_v7_Abstract_Blue_Vector_Background_2.jpg?w=512",
    "name": "Abstract",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/df07b50b-4627-48dc-83fc-7a1dc9874652/generations/880a39a3-99ee-435f-abb8-27298ead8f12/Absolute_Reality_v16_An_expression_of_stopped_time_Old_antiqua_2.jpg?w=512",
    "name": "&quot;An",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/61fb9ada-a59a-4e55-9ed2-fa86601a9655/generations/828111cc-1918-449a-b0c5-8f32a6f11f4b/Absolute_Reality_v16_realistic_black_african_soccer_player_fac_2.jpg?w=512",
    "name": "Realisti",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/e63c8fe1-ee51-4a73-bb47-e3b45ecc5f0f/generations/e87368f2-9389-44fa-9d69-9f567f45bd21/variations/Default_Alisa_in_wonderland_binary_code_in_the_Background_bla_1_e87368f2-9389-44fa-9d69-9f567f45bd21_1.jpg?w=512",
    "name": "Alisa in",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/d65c3d22-9c2c-4be6-b2f2-84987a3c08ec/generations/a02dba86-7020-412f-9dcf-22ec662eb8f8/AlbedoBase_XL_Fat_zombies_fighting_1.jpg?w=512",
    "name": "Fat zomb",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/69b8be8e-a34a-4ce9-b851-36a60812db66/generations/86c7f8e1-aa0b-417b-92e7-ab732435adc9/Default_happy_ant_cute_cartoon_3d_pixar_white_background_2.jpg?w=512",
    "name": "Happy an",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/77973dfc-beb4-458e-a333-c8f8be4916db/generations/62382735-9065-461d-bb75-c881320020b4/Leonardo_Diffusion_XL_Minimalist_space_time_logo_black_and_whi_2.jpg?w=512",
    "name": "Minimali",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/722de590-c0b1-450f-8367-010c7f3c5179/generations/ba39b37a-6f45-4e23-9986-0348dfe1756c/Leonardo_Phoenix_A_serene_and_emotive_photograph_featuring_a_s_1.jpg?w=512",
    "name": "A serene",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/0b149bda-021e-4b94-8ccd-2c532770f34f/generations/6ecacd09-bce1-4afa-9a16-db52a116b9b8/Default_Masterpiece_with_a_grey_background_dark_and_red_in_a_v_1.jpg?w=512",
    "name": "Masterpi",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/3014743a-1cb0-49a9-8843-dab8132563f9/generations/adba319d-329a-40af-a8bd-efe3ce55a0c5/Leonardo_Vision_XL_Design_a_vibrant_and_dynamic_EDM_wave_produ_0.jpg?w=512",
    "name": "Design a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/b1611662-5b73-443c-b17e-3ed42e60c5f5/generations/8c5da941-fb1a-4f7d-9a9b-c31a19686a08/Default_Lion_fight_tiger_fight_blood_2.jpg?w=512",
    "name": "Lion fig",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/f2348a49-d47a-4fc0-9549-b4510b34c3bb/generations/aa4a6b31-3448-4fe9-8e27-53d5cad22840/Default_Pharmaceutical_girl_0.jpg?w=512",
    "name": "Pharmace",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/e052705f-a696-43e6-9199-62cf3731b165/generations/cd8cf15b-e371-4ea9-8085-18704cac2db4/Leonardo_Diffusion_XL_live_dragon_0.jpg?w=512",
    "name": "Live dra",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/92ce83bc-f8c0-447f-ae17-6327b696867c/generations/4f4cbd53-9dea-4a26-b061-989c3d8ac65f/Default_Imagine_Uncle_Sam_Raising_a_American_Flag_0.jpg?w=512",
    "name": "Imagine",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/8c972741-3547-46f3-989a-7993f6a08c17/generations/a9a5c178-57be-48ee-b2d2-9825674624c0/Default_Logo_illustrations_anonymous_0.jpg?w=512",
    "name": "Logo",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/6defb190-f5c3-4f32-b5ec-982cd9595ca3/generations/05853fac-c801-4fe1-93ce-5944b97fc2a4/Leonardo_Diffusion_XL_Santas_village_North_Pole_Santa_on_his_s_2.jpg?w=512",
    "name": "Santa’s ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/2443524f-61d2-4421-a80f-66b545a89610/generations/d9b4931b-4807-4e8f-9299-501890df096d/Default_Old_bar_scene_2.jpg?w=512",
    "name": "Old bar ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/87e26216-0a27-4667-867c-41878acf97c6/generations/7b1cfbb9-c7b6-41a8-91d6-8236b5b08de7/3D_Animation_Style_background_of_several_elderly_people_0.jpg?w=512",
    "name": "Backgrou",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/48c7f632-7fa6-4519-b0c6-6f8dabdc8772/generations/5d204561-e3e9-45d5-b40d-15f5b7f8282c/DreamShaper_v7_Animi_Girl_look_very_slepply_room_on_the_bed_1.jpg?w=512",
    "name": "Animi Gi",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/603fd3fd-0427-4fe6-9092-bff6609456c5/generations/dedfeeaa-5446-45c3-8984-cc6438323255/Leonardo_Diffusion_XL_Create_an_image_of_a_celebrity_with_a_bl_0.jpg?w=512",
    "name": "Create a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/8046e667-688c-412b-be3c-7279c13e4127/generations/7af7e535-c4a2-4bdc-8237-3eb216f22065/Absolute_Reality_v16_Mujer_de_cuerpo_entero_con_ojos_azules_y_3.jpg?w=512",
    "name": "Mujer de",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/b2774905-328d-4b7e-87e1-af0b78321450/generations/19e1fafe-aa7e-47b8-bbd0-6916bcf66d53/Leonardo_Diffusion_XL_A_minimalist_album_cover_with_a_black_an_0.jpg?w=512",
    "name": "A minima",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/7eae4319-3030-47a5-b3f7-be236021b922/generations/4ea33c26-ce25-4822-a827-f63b15c3a231/Default_Youre_in_charge_of_creating_a_poster_to_promote_La_Fou_0.jpg?w=512",
    "name": "You're i",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/c606cb5e-892f-4147-abe4-9c43223d3566/generations/cb7fce16-6521-416b-93db-f9d7ef5a9f69/Leonardo_Diffusion_XL_An_artistic_representation_of_the_air_wa_1.jpg?w=512",
    "name": "An artis",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/3064dc2b-ff29-4087-b2b5-8cac714d7e99/generations/e4c8fb22-71a9-4bef-927b-a8478c50fb38/Leonardo_Diffusion_XL_A_visually_descriptive_and_detailed_logo_2.jpg?w=512",
    "name": "A visual",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/6174dc97-8f6c-4890-8c88-f34eb9a5bada/generations/365f315e-5fa2-47ec-8614-70f47041cf95/DreamShaper_v7_create_a_logo_for_digital_technology_and_creati_1.jpg?w=512",
    "name": "Create a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/0f044210-f5ee-4d68-a2e9-d4dc632bf64b/generations/63864397-9a10-479d-bf1a-f754f56692c4/Leonardo_Diffusion_XL_vector_magic_asian_dragonWhite_backgroun_1.jpg?w=512",
    "name": "Vector m",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/5e64da85-5990-46bf-ac52-86b900b47808/generations/5cf1c1fe-92e6-4613-b543-878fcb905fbe/Absolute_Reality_v16_a_young_man_holding_a_pack_with_water_in_0.jpg?w=512",
    "name": "A young ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/044c253a-dbb7-4048-81e6-5a9b4cae35df/generations/a5b9258c-7731-4b41-a2d5-9d8e63fe7e39/Leonardo_Diffusion_XL_Create_an_adorable_and_elegant_depiction_2.jpg?w=512",
    "name": "Create a",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/99031040-3f94-4a08-b89e-5e647e0851dc/generations/44de4f06-c20c-41fa-9361-311b0a4896ec/3D_Animation_Style_10_year_old_light_brunette_child_with_long_0.jpg?w=512",
    "name": "10 year ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/05df10b4-2665-40bc-95cd-80586eca68e2/generations/eb663e60-815d-4ecf-b714-fc406d86dcc4/Leonardo_Diffusion_XL_Step_into_a_realm_of_ancient_wisdom_and_1.jpg?w=512",
    "name": "&quot;St",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/c92fb0d9-94f5-44c4-8de4-5eaec1efbb45/generations/7e00c89b-a191-4a9b-900b-bc0755aa83c1/Leonardo_Diffusion_floral_flower_good_vibes_simple_and_whiteco_0.jpg?w=512",
    "name": "Floral",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/55a16649-49be-415b-8545-a7b614ef6d12/generations/3cf28819-8031-4223-a49a-1bec8517bf2f/Default_A_black_American_Bulldog_with_black_Raven_Wings_3.jpg?w=512",
    "name": "A black ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/f5fda0dc-bc5b-4132-b642-0359918ae7b2/generations/4044b3a3-90a9-4ea5-b93a-d97aa64f3ed3/Default_high_quality_8K_Ultra_HD_high_detailed_Watercolor_wash_1.jpg?w=512",
    "name": "High qua",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/c3fc7f0a-bcbd-457c-b2f9-b5432c3a2260/generations/7bd9d919-19eb-407f-a55e-faa5452a1f3e/Absolute_Reality_v16_imagine_prompt_an_illustration_of_panic_s_2.jpg?w=512",
    "name": "/imagine",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/dc012d81-1d6b-414e-8d92-25c72d9d764a/generations/2f75d70a-52ab-4d64-8e68-f4952ce8f24c/Absolute_Reality_v16_a_promotional_image_of_a_digital_projecto_1.jpg?w=512",
    "name": "A promot",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/3f0ac3c4-95f5-495b-8946-cf0583b4f6ca/generations/785faf91-48a1-4c82-af1e-7210dd09b829/3D_Animation_Style_Beb_no_colo_da_me_chorando_muito_1.jpg?w=512",
    "name": "Bebê no ",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/1a6d746d-2101-4667-b25e-be949682177a/generations/62eb1822-235e-4c56-9c45-160780747847/Default_The_cross_of_Jesus_Christ_glowing_surrounded_by_light_0.jpg?w=512",
    "name": "The cros",
    "liked": false,
    "suggested": false,
    "library": false
  },
  {
    "uri": "https://cdn.leonardo.ai/users/07a95c21-977d-4b0a-966a-9a95124c4642/generations/2f29279c-1401-400a-adf3-b32343bdbe49/Default_Sunset_on_the_top_of_the_hill_on_the_island_0.jpg?w=512",
    "name": "Sunset o",
    "liked": false,
    "suggested": false,
    "library": false
  }

    ]
}