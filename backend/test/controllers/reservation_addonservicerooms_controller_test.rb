require "test_helper"

class ReservationAddonserviceroomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservation_addonserviceroom = reservation_addonservicerooms(:one)
  end

  test "should get index" do
    get reservation_addonservicerooms_url, as: :json
    assert_response :success
  end

  test "should create reservation_addonserviceroom" do
    assert_difference("ReservationAddonserviceroom.count") do
      post reservation_addonservicerooms_url, params: { reservation_addonserviceroom: { addonserviceroom_id: @reservation_addonserviceroom.addonserviceroom_id, reservation_id: @reservation_addonserviceroom.reservation_id } }, as: :json
    end

    assert_response :created
  end

  test "should show reservation_addonserviceroom" do
    get reservation_addonserviceroom_url(@reservation_addonserviceroom), as: :json
    assert_response :success
  end

  test "should update reservation_addonserviceroom" do
    patch reservation_addonserviceroom_url(@reservation_addonserviceroom), params: { reservation_addonserviceroom: { addonserviceroom_id: @reservation_addonserviceroom.addonserviceroom_id, reservation_id: @reservation_addonserviceroom.reservation_id } }, as: :json
    assert_response :success
  end

  test "should destroy reservation_addonserviceroom" do
    assert_difference("ReservationAddonserviceroom.count", -1) do
      delete reservation_addonserviceroom_url(@reservation_addonserviceroom), as: :json
    end

    assert_response :no_content
  end
end
