require "test_helper"

class ReservationEquipmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservation_equipment = reservation_equipments(:one)
  end

  test "should get index" do
    get reservation_equipments_url, as: :json
    assert_response :success
  end

  test "should create reservation_equipment" do
    assert_difference("ReservationEquipment.count") do
      post reservation_equipments_url, params: { reservation_equipment: { equipment_id: @reservation_equipment.equipment_id, reservation_id: @reservation_equipment.reservation_id } }, as: :json
    end

    assert_response :created
  end

  test "should show reservation_equipment" do
    get reservation_equipment_url(@reservation_equipment), as: :json
    assert_response :success
  end

  test "should update reservation_equipment" do
    patch reservation_equipment_url(@reservation_equipment), params: { reservation_equipment: { equipment_id: @reservation_equipment.equipment_id, reservation_id: @reservation_equipment.reservation_id } }, as: :json
    assert_response :success
  end

  test "should destroy reservation_equipment" do
    assert_difference("ReservationEquipment.count", -1) do
      delete reservation_equipment_url(@reservation_equipment), as: :json
    end

    assert_response :no_content
  end
end
