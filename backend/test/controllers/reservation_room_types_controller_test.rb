require "test_helper"

class ReservationRoomTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservation_room_type = reservation_room_types(:one)
  end

  test "should get index" do
    get reservation_room_types_url, as: :json
    assert_response :success
  end

  test "should create reservation_room_type" do
    assert_difference("ReservationRoomType.count") do
      post reservation_room_types_url, params: { reservation_room_type: { reservation_id: @reservation_room_type.reservation_id, roomtype_id: @reservation_room_type.roomtype_id } }, as: :json
    end

    assert_response :created
  end

  test "should show reservation_room_type" do
    get reservation_room_type_url(@reservation_room_type), as: :json
    assert_response :success
  end

  test "should update reservation_room_type" do
    patch reservation_room_type_url(@reservation_room_type), params: { reservation_room_type: { reservation_id: @reservation_room_type.reservation_id, roomtype_id: @reservation_room_type.roomtype_id } }, as: :json
    assert_response :success
  end

  test "should destroy reservation_room_type" do
    assert_difference("ReservationRoomType.count", -1) do
      delete reservation_room_type_url(@reservation_room_type), as: :json
    end

    assert_response :no_content
  end
end
