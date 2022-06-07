import WELLRIGS from "./rigs.json";

export const calcTimeline = (data) => {
    const {
        rig_move_time,
        rig_type,
        job_type,
        surface_casing,
        intermmediate_casing,
        production_casing,
        well_deviation,
        liner_depth,
        length_of_core_section,
        no_of_core_runs,
        total_well,
        completions_type,
        mud_line_suspension,
    } = data;
    let timeline = [
        {
            name: "Rig Move",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
            total: rig_move_time || 0,
        },
        {
            name: "Rig Up",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
            total: WELLRIGS.find((val) => val.name === rig_type).rig_up,
        },
        {
            name: "Conductor Pipe",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
            total: ["Drilling", "Drilling and Completion"].includes(job_type)
                ? 2
                : 0,
        },
        {
            name: "Surface Casing",
            depth: surface_casing || 0,
            rih: surface_casing / (1500 * 24) || 0,
            drill: surface_casing / (120 * 24) || 0,
            circulate: 0.5,
            poh: surface_casing / (1500 * 24) || 0,
            casing: surface_casing / (300 + 12 * 24) || 0,
            wh_work: [
                "Floaters (3000FT - 4000FT)",
                "Floaters (4000FT - 6000FT)",
                "Floaters (6000FT+)",
            ].includes(rig_type)
                ? 2
                : rig_type === "HWU"
                ? 0
                : 1,
        },
        {
            name: "Intermediate Casing",
            depth: intermmediate_casing || 0,
            rih: intermmediate_casing / (1500 * 24) || 0,
            drill: intermmediate_casing / (120 * 24) || 0,
            circulate: 0.5,
            poh: intermmediate_casing / (1500 * 24) || 0,
            casing: intermmediate_casing / (350 + 12 * 24) || 0,
            wh_work: [
                "Floaters (3000FT - 4000FT)",
                "Floaters (4000FT - 6000FT)",
                "Floaters (6000FT+)",
            ].includes(rig_type)
                ? 2
                : rig_type === "HWU"
                ? 0
                : 1,
        },
        {
            name: "Production Casing",
            depth: production_casing || 0,
            rih: production_casing / (1500 * 24) || 0,
            drill: production_casing / (120 * 24) || 0,
            circulate: ["Vertical", "Deviation < 45 deg"].includes(
                well_deviation
            )
                ? 1
                : well_deviation === "Deviation > 45 deg"
                ? 2
                : 2.5,
            poh: production_casing / (1500 * 24) || 0,
            casing: production_casing / (350 + 12 * 24) || 0,
            wh_work: [
                "Floaters (3000FT - 4000FT)",
                "Floaters (4000FT - 6000FT)",
                "Floaters (6000FT+)",
            ].includes(rig_type)
                ? 2
                : rig_type === "HWU"
                ? 0
                : 1,
        },
        {
            name: "Liner Casing",
            depth: liner_depth || 0,
            rih: (liner_depth === 0 ? 0 : production_casing / (1500 * 24)) || 0,
            drill:
                (liner_depth === 0
                    ? 0
                    : liner_depth - production_casing / (120 * 24)) || 0,
            circulate:
                liner_depth === 0
                    ? 0
                    : ["Vertical", "Deviation < 45 deg"].includes(
                          well_deviation
                      )
                    ? 1
                    : well_deviation === "Deviation > 45 deg"
                    ? 2
                    : 2.5,
            poh: (liner_depth === 0 ? 0 : liner_depth / (1500 * 24)) || 0,
            casing:
                liner_depth === 0
                    ? 0
                    : [
                          "Vertical",
                          "Deviation < 45 deg",
                          "Deviation > 45 deg",
                      ].includes(well_deviation)
                    ? liner_depth -
                          production_casing / (300 * 24) +
                          production_casing / (1500 * 24 * 2) +
                          0.5 || 0
                    : liner_depth -
                          production_casing / (300 * 24) +
                          production_casing / (1200 * 24 * 2) +
                          0.5 || 0,
            wh_work: [
                liner_depth === 0 ? 0 : "Floaters (3000FT - 4000FT)",
                "Floaters (4000FT - 6000FT)",
                "Floaters (6000FT+)",
            ].includes(rig_type)
                ? 2
                : rig_type === "HWU"
                ? 0
                : 1,
        },
        {
            name: "Logging Intermediate Csg",
            depth: intermmediate_casing || 0,
            rih: intermmediate_casing > 0 ? 1 : 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Logging Production Csg",
            depth: production_casing || 0,
            rih: production_casing > 0 ? 1 : 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Logging Liner Section",
            depth: liner_depth || 0,
            rih: liner_depth > 0 ? 1 : 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Logging for Completion",
            depth: liner_depth || 0,
            rih: job_type === "Drilling" ? 0 : 1.5,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Coring Operation",
            depth: production_casing || 0,
            rih: 0,
            drill: (no_of_core_runs * length_of_core_section) / (50 * 24) || 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Retrieve Completion",
            depth: total_well || 0,
            rih:
                job_type === "Workover"
                    ? ["Single", "Single Selective"].includes(completions_type)
                        ? total_well / 250 / 24 || 0
                        : (total_well / 250 / 24) * 2 || 0
                    : job_type === "Rigless Workover"
                    ? ["Single", "Single Selective"].includes(completions_type)
                        ? total_well / 100 / 24 || 0
                        : (total_well / 100 / 24) * 2 || 0
                    : 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Milling Operation",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Drill Out Cement Plug 1",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Drill Out Cement Plug 2",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Drill Out Cement Plug 3",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Drill Out Cement Plug 4",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 150 / 24
                : 0 / 2500 / 24,
            drill: job_type === "HWU" ? 0 / 10 / 24 : 0 / 120 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Bit & Scrapper Run",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24
                : 0 / 2500 / 24,
            drill: 0.5,
            circulate: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24
                : 0 / 2500 / 24,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24
                : 0 / 2500 / 24,
            casing: 0.5,
            wh_work: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24
                : 0 / 2500 / 24,
        },
        {
            name: "Wellbore Cleaning",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24
                : 0 / 2500 / 24,
            drill: 0,
            circulate: [
                "Floaters (3000FT - 4000FT)",
                "Floaters (4000FT - 6000FT)",
                "Floaters (6000FT+)",
                "HWU",
                "Jack UP 02 (180K)",
                "Jack UP 01 (160K)",
            ].includes(job_type)
                ? 2
                : 1.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24
                : 0 / 2500 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Sump Packer Run",
            depth: total_well || 0,
            rih: (total_well / 3500 / 24) * 2 || 0,
            drill: 0,
            circulate: 1 / 24,
            poh: (total_well / 4000 / 24) * 2 || 0,
            casing: 2 / 24,
            wh_work: 2 / 24,
        },
        {
            name: "TCP/DST (Zone 1)",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: (Math.pow(2.76, 2) * 0.005454 * 0.1781 * 0) / 5 / 60 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "TCP/DST (Zone 2)",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: (Math.pow(2.76, 2) * 0.005454 * 0.1781 * 0) / 5 / 60 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "TCP/DST (Zone 3)",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: (Math.pow(2.76, 2) * 0.005454 * 0.1781 * 0) / 5 / 60 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "W/Line Perf. (Zone 1)",
            depth: 0,
            rih: (0 / 3500 / 24) * 2,
            drill: 0,
            circulate: 0.5,
            poh: (0 / 3500 / 24) * 2,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "W/Line Perf. (Zone 2)",
            depth: 0,
            rih: (0 / 3500 / 24) * 2,
            drill: 0,
            circulate: 0.5,
            poh: (0 / 3500 / 24) * 2,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "W/Line Perf. (Zone 3)",
            depth: 0,
            rih: (0 / 3500 / 24) * 2,
            drill: 0,
            circulate: 0.5,
            poh: (0 / 3500 / 24) * 2,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Well Test",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Cement Squeeze",
            depth: total_well || 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? total_well / 3000 / 24 || 0
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? total_well + 2500 / 3000 / 24 || 0
                : job_type === "HWU"
                ? total_well / 200 / 24 || 0
                : total_well / 2500 / 24 || 0,
            drill: 4 / 24,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? total_well / 3000 / 24 || 0
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? total_well + 2500 / 3000 / 24 || 0
                : job_type === "HWU"
                ? total_well / 200 / 24 || 0
                : total_well / 2500 / 24 || 0,
            casing: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? total_well / 3000 / 24 || 0
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? total_well + 2500 / 3000 / 24 || 0
                : job_type === "HWU"
                ? total_well / 200 / 24 || 0
                : total_well / 2500 / 24 || 0,
            wh_work: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? total_well / 3000 / 24 || 0
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? total_well + 2500 / 3000 / 24 || 0
                : job_type === "HWU"
                ? total_well / 200 / 24 || 0
                : total_well / 2500 / 24 || 0,
        },
        {
            name: "IGP Job (Zone 1)",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: 0,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "IGP Job (Zone 2)",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: 0,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "IGP Job (Zone 3)",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: 0,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Isolation Pkr Assy",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: 0,
            circulate: 4 / 24,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Install Packer Plug",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: 0,
            circulate: 4 / 24,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Retrieve Packer Plug",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: 0,
            circulate: 0.5,
            poh: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            casing: 0,
            wh_work: 0,
        },
        {
            name: "Install Completion",
            depth: 0,
            rih: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            drill: ["Med1 Light Land Rig", "Med Light Land Rig"].includes(
                rig_type
            )
                ? 0 / 3000 / 24 + 2 / 24
                : [
                      "Floaters (3000FT - 4000FT)",
                      "Floaters (4000FT - 6000FT)",
                      "Floaters (6000FT+)",
                  ].includes(job_type)
                ? 0 + 2500 / 3000 / 24 + 2 / 24
                : job_type === "HWU"
                ? 0 / 200 / 24 + 6 / 24
                : 0 / 2500 / 24 + 2 / 24,
            circulate: 4 / 24,
            poh: 4 / 24,
            casing: 4 / 24,
            wh_work: 0,
        },
        {
            name: "Slickline Operation",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
            total:
                job_type === "Drilling"
                    ? 0
                    : ["Single", "Single Selective"].includes(completions_type)
                    ? 6
                    : 10,
        },
        {
            name: "Well Clean Up",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
            total: job_type
                ? 0
                : ["Single", "Single Selective"].includes(completions_type)
                ? 4
                : 8,
        },
        {
            name: "Nitrogen Lift",
            depth: ["Single", "Single Selective"].includes(completions_type)
                ? Math.min([0, 0]) || 0
                : Math.max([0, 0]) || 0,
            rih: 0.5,
            drill: 0 / 1200 / 24,
            circulate: 4 / 24,
            poh: 0 / 1200 / 24,
            casing: 0.5,
            wh_work: 0.5,
        },
        {
            name: "N/D BOP & N/U Xmas Tree",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
            total: mud_line_suspension ? 6 : 4,
        },
        {
            name: "Hand Over",
            depth: 0,
            rih: 0,
            drill: 0,
            circulate: 0,
            poh: 0,
            casing: 0,
            wh_work: 0,
        },
    ];

    return timeline;
};
